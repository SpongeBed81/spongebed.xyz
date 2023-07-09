<script>
  import "../global.css";

  import { onMount } from "svelte";
  import Altbar from "../components/altbar.svelte";
  import { status } from "../stores.js";
  import Sidebar from "../components/sidebar.svelte";
  import PageTransition from "../components/page-transition.svelte";

  export let data;

  status.set(data.lanyard);

  onMount(() => {
    let ws;

    const createWS = () => {
      const ws = new WebSocket("wss://api.lanyard.rest/socket");
      let heartbeatInterval;

      ws.onopen = () => {
        console.log("[WS] Connected");

        ws.send(
          JSON.stringify({
            op: 2,
            d: {
              subscribe_to_id: data.lanyard.discord_user.id,
            },
          })
        );
      };

      const setupHeartbeatTimer = (interval) => {
        return window.setInterval(() => {
          ws.send(
            JSON.stringify({
              op: 3,
            })
          );
        }, interval);
      };

      ws.onmessage = (event) => {
        const { op, d } = JSON.parse(event.data);

        switch (op) {
          case 0:
            status.set(d);
            break;
          case 1:
            heartbeatInterval = setupHeartbeatTimer(d.heartbeat_interval);
            break;
        }
      };

      ws.onclose = () => {
        console.log("[WS] Disconnected");

        clearInterval(heartbeatInterval);

        ws.onopen = null;
        ws.onmessage = null;
        ws.onclose = null;

        setTimeout(() => {
          createWS();
        }, 5000);
      };

      return ws;
    };

    ws = createWS();
  });
</script>

<Sidebar />
<PageTransition url={data.url}>
  <slot />
</PageTransition>
<Altbar />
