import DocsContainer from "../components/docs/DocsContainer";

function IssuesPage() {
  return (
    <>
      <DocsContainer>
        <div className="docs-body">
          <h1> Common Issues </h1>
          <p>
            So something isn't working and you find yourself stuck, this page is
            here to give answers to common issues. If nothing here answers your
            question, please feel free to ask in the on the{" "}
            <a href="https://discord.com/invite/YSYyDpeF8R">Discord</a>
          </p>

          <ul>
            <li>
              <a href="#the-slimevr-server-wont-start">
                The SlimeVR Server won't start
              </a>
            </li>
            <li>
              <a href="#the-wi-fi-settings-window-outputs-error">
                The Wi-Fi Settings window outputs ERROR
              </a>
            </li>
            <li>
              <a href="#the-wi-fi-settings-window-outputs-symbols-and-nothing-else">
                The Wi-Fi Settings window outputs symbols and nothing else
              </a>
            </li>
            <li>
              <a href="#my-tracker-never-connects-to-wi-fi--are-not-appearing-on-the-slimevr-server">
                My tracker never connects to Wi-Fi / are not appearing on the
                SlimeVR Server
              </a>
            </li>
            <li>
              <a href="#the-trackers-are-connected-to-my-wi-fi-but-dont-turn-up-on-slimevr">
                The trackers are connected to my Wi-Fi but don't turn up on
                SlimeVR
              </a>
            </li>
            <li>
              <a href="#the-trackers-are-connected-to-the-slimevr-server-but-arent-turning-up-on-steam">
                The trackers are connected to the SlimeVR server but aren't
                turning up on Steam
              </a>
            </li>
            <li>
              <a href="#my-trackers-are-bound-to-the-wrong-body-part-in-steamvr">
                My trackers are bound to the wrong body part in SteamVR
              </a>
            </li>
            <li>
              <a href="#your-trackers-are-drifting-more-than-expected">
                Your trackers are drifting more than expected
              </a>
            </li>
            <li>
              <a href="#my-feet-sink-into-the-floor--im-sliding-a-lot">
                My feet sink into the floor / I'm sliding a lot
              </a>
            </li>
            <li>
              <a href="#trackers-are-moving-in-the-wrong-direction-when-i-move">
                Trackers are moving in the wrong direction when I move
              </a>
            </li>
            <li>
              <a href="#my-avatar-floats-above-the-ground">
                My avatar floats above the ground
              </a>
            </li>
            <li>
              <a href="#my-legs-dont-bend">My legs don't bend</a>
            </li>
            <li>
              <a href="#my-legs-cross-when-sitting-down">
                My legs cross when sitting down
              </a>
            </li>
            <li>
              <a href="#one-of-my-leg-is-higher-than-the-other">
                One of my leg is higher than the other
              </a>
            </li>
            <li>
              <a href="#webview2-is-missing--slimevr-gui-crashes-immediately--panicked-at--webview2error">
                WebView2 is missing / SlimeVR GUI crashes immediately /
                "panicked at ... WebView2Error"
              </a>
            </li>
            <li>
              <a href="#quest-pro-controllers-cause-high-latency--lag">
                Quest Pro controllers cause high latency / lag
              </a>
            </li>
            <li>
              <a href="#slimevr-gui-keeps-timing-out--connection-lost-to-the-server-trying-to-reconnect-repeatedly">
                SlimeVR GUI keeps timing out / "Connection lost to the server.
                Trying to reconnect..." repeatedly
              </a>
            </li>
          </ul>

          <h2 id="the-slimevr-server-wont-start">
            The SlimeVR Server won't start
          </h2>
          <ul>
            <li>
              If there's a port error, make sure you don't have other instances
              of the server running and/or restart your PC.
            </li>
            <li>
              This may also be caused by Java not being installed or issues with
              your Java installation. The installer linked in the Installing the
              server page should handle this.
            </li>
          </ul>
          <h2 id="the-wi-fi-settings-window-outputs-error">
            The Wi-Fi Settings window outputs ERROR
          </h2>
          <p>
            Try resetting your tracker, this may fix the issues immediately. If
            this doesn't work, your COM port may be being hogged, which can be
            tested by going through the firmware update process in VSCode (as it
            has more verbose error messages). If this is the case, close any
            application that might be hogging the ports (VSCode and Cura are
            often the cause). If the issue persists, try connecting the tracker
            to a different USB port.
          </p>
          <h2 id="the-wi-fi-settings-window-outputs-symbols-and-nothing-else">
            The Wi-Fi Settings window outputs symbols and nothing else
          </h2>
          <p>There are two common causes that you should check:</p>
          <ul>
            <li>Make sure that you have the right driver installed.</li>
            <li>
              Check that your PIO firmware upload worked. If you have multiple
              firmware versions open in VSCode you will have to set the correct
              one to default to upload.
            </li>
          </ul>
          <h2 id="my-tracker-never-connects-to-wi-fi--are-not-appearing-on-the-slimevr-server">
            My tracker never connects to Wi-Fi / are not appearing on the
            SlimeVR Server
          </h2>
          <p>The two common issues that cause this error are:</p>
          <ul>
            <li>
              Make sure you are connecting to a 2.4GHz network, 5GHz networks
              are not supported.
            </li>
            <li>
              Check your SSID for special characters. At the time of writing
              SlimeVR only supports network SSIDs that contain alphanumerical
              characters.
            </li>
            <li>
              Make sure you are using WiFi channels 1-11. Avoid using channels
              12-14 because connection issues may occur.
            </li>
            <li>
              Ensure WPA3 WiFi security is not being used, as the SlimeVR
              trackers do not support this security protocol. We recommend using
              WPA2, which is fully supported by SlimeVR.
            </li>
          </ul>
          <p>
            If all of this is correct, you can check your gateway's list of
            connected devices to see if all your trackers are connecting. If a
            tracker is not connecting even after using the same firmware upload
            with hardcoded Wi-Fi details there are two additional steps you can
            check:
          </p>
          <ul>
            <li>
              Check if your Wi-Fi has reached its maximum allowed Wi-Fi
              connections. You can test this by disconnecting devices and then
              trying to connect your trackers again.
            </li>
            <li>
              If you hard coded your Wi-Fi settings in{" "}
              <code className="hljs">platformio.ini</code> try connecting your
              trackers via USB and{" "}
              <a href="server/connecting-trackers.html#connect-trackers">
                pushing new Wi-Fi details
              </a>
              . You may find this either fixes your connection or provides you
              with additional details on why the connection is failing.
            </li>
          </ul>
          <h2 id="sensor-was-reset-error">Sensor was reset error</h2>
          <p>
            Check your INT wire, there is either a bad connection or you have it
            connected to the flash pin. If you are building your tracker on a
            breadboard, your connections may be not firm enough and cause this
            error.
          </p>
          <h2 id="the-trackers-are-connected-to-my-wi-fi-but-dont-turn-up-on-slimevr">
            The trackers are connected to my Wi-Fi but don't turn up on SlimeVR
          </h2>
          <p>
            Check that you do not have two copies of the SlimeVR server running,
            as only one of them will show trackers connected.
          </p>
          <p>
            If only one server is running, this is most likely a firewall issue,
            go to SlimeVR Server folder and run{" "}
            <code className="hljs">firewall.bat</code> as administrator to add
            the firewall rules to Windows Defender Firewall.
          </p>
          <p>
            If you are still having trouble, try manually adding the SlimeVR
            Server to your firewall.
          </p>
          <ol>
            <li>
              Go to <strong>Settings</strong> &gt;{" "}
              <strong>Network &amp; Internet</strong> then click on the text
              link <strong>Window Firewall</strong> (you may have to scroll
              down).
            </li>
            <li>
              In the firewall window, click the link{" "}
              <strong>Allow an app through firewall</strong>.
            </li>
            <li>
              Click the <strong>Allow another app...</strong> button, and then{" "}
              <strong>Browse...</strong> in the opened{" "}
              <strong>Add an app</strong> window. If your options are greyed out
              in the <strong>Allowed apps</strong> window, click the{" "}
              <strong>Change Settings</strong> button to allow changes.
            </li>
            <li>
              In the <strong>File name</strong> text box, type{" "}
              <code className="hljs">*.*</code> and press enter before
              navigating to <code className="hljs">slimevr.jar</code> in your
              SlimeVR server folder and select it (if you cannot see files in
              this folder, try typing <code className="hljs">*.*</code> and
              pressing enter again to show all files).
            </li>
            <li>
              Click the <strong>Add</strong> button to add the file to your
              firewall settings.
            </li>
            <li>
              Finally, make sure both public and private checkboxes are selected
              in the <strong>Allowed apps</strong> window before clicking{" "}
              <strong>OK</strong> to save the changes.
            </li>
          </ol>
          <p>
            If adding SlimeVR to your firewall has not worked, you can try to
            diagnose the issue further with the following steps:
          </p>
          <ol>
            <li>
              Try completely disabling Windows Defender Firewall on your
              computer temporarily to test if the trackers will connect.
              <ul>
                <li>
                  If the trackers only show up on SlimeVR when Windows Defender
                  Firewall is disabled, then you have a problem with your
                  firewall.
                </li>
              </ul>
            </li>
            <li>
              Try pinging the tracker from your computer to see if it can be
              reached by opening Command Prompt (CMD) and run the command{" "}
              <code className="hljs">ping &lt;IP&gt;</code>, where{" "}
              <code className="hljs">&lt;IP&gt;</code> is your tracker's IP (ex.{" "}
              <code className="hljs">ping 192.168.0.1</code>). You can find the
              tracker's IP using the "Serial console" under the "Settings" tab
              of the SlimeVR GUI.
              <ul>
                <li>
                  If the command outputs something like{" "}
                  <code className="hljs">
                    Reply from 192.168.XXX.XXX: Destination host unreachable.
                  </code>
                  , then you likely have a problem with either your router or
                  your firewall.
                </li>
                <li>
                  If the command outputs something like{" "}
                  <code className="hljs">
                    Reply from 192.168.XXX.XXX: bytes=32 time&lt;1ms TTL=63
                  </code>
                  , then you likely have a problem with either your network
                  adapter or your network settings. You may need to enable
                  broadcast packets (or something similar) on your router, as
                  SlimeVR trackers broadcast to{" "}
                  <code className="hljs">255.255.255.255</code> to discover your
                  SlimeVR Server.
                </li>
              </ul>
            </li>
            <li>
              Try hosting a Wi-Fi hotspot either from your computer or your
              phone and connect your trackers to it to see if they will show up
              on SlimeVR using it.
              <ul>
                <li>
                  If the trackers don't show up on SlimeVR, then you likely have
                  a problem with either your trackers or your computer. It may
                  be worth trying disabling your Windows Defender Firewall as
                  per the first step, but using this Wi-Fi hotspot instead.
                </li>
                <li>
                  If the trackers show up on SlimeVR, then you likely have a
                  problem with either your router or the network adapter you
                  connect to your router with.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            If none of these steps have helped you, you can find information
            about getting further help at{" "}
            <a href="#common-issues">the top of this page</a>.
          </p>
          <h2 id="the-trackers-are-connected-to-the-slimevr-server-but-arent-turning-up-on-steam">
            The trackers are connected to the SlimeVR server but aren't turning
            up on Steam
          </h2>
          <ul>
            <li>
              Make sure you installed SlimeVR with{" "}
              <a href="https://slimevr.dev/download">the installer</a> to have
              the right SteamVR driver.
            </li>
            <li>
              Make sure the SlimeVR addon is enabled in SteamVR Settings &gt;
              Startup/Shutdown &gt; Manage Add-ons.
            </li>
            <li>
              Make sure you have{" "}
              <a href="server/configuring-trackers.html#configuring-how-many-virtual-trackers-you-need">
                SteamVR Trackers enabled in the SlimeVR settings
              </a>
              .
            </li>
          </ul>
          <h2 id="my-trackers-are-bound-to-the-wrong-body-part-in-steamvr">
            My trackers are bound to the wrong body part in SteamVR
          </h2>
          <ul>
            <li>
              If this is a problem in VRChat, try reducing the IK Calibration
              range to something smaller (e.g. 0.2).
            </li>
            <li>
              If this happens in SteamVR, make sure your trackers are assigned
              to the right body parts in SlimeVR.
            </li>
          </ul>
          <h2 id="your-trackers-are-drifting-more-than-expected">
            Your trackers are drifting more than expected
          </h2>
          <p>
            Make sure that when you turn on your tracker, it's lying on a flat
            surface. The sensors need to calibrate for 10-20 seconds in a stable
            environment.{" "}
          </p>
          <h2 id="my-feet-sink-into-the-floor--im-sliding-a-lot">
            My feet sink into the floor / I'm sliding a lot
          </h2>
          <p>
            This will be due to either your physical or bone length setup. Try:
          </p>
          <ul>
            <li>
              Making sure "Skating correction" and "Floor clip" are enabled in
              the SlimeVR Settings &gt; Tracking settings (doesn't work for
              Quest Standalone for now).
            </li>
            <li>
              Running through the Automatic Body Proportions Calibration again.
            </li>
            <li>Changing your IRL tracker mounting.</li>
            <li>
              Adjusting your bone lengths manually by following the{" "}
              <a href="server/body-config.html#configuring-body-proportions-manually">
                step shown here
              </a>
              .
            </li>
          </ul>
          <h2 id="trackers-are-moving-in-the-wrong-direction-when-i-move">
            Trackers are moving in the wrong direction when I move
          </h2>
          <ul>
            <li>Use the experimental Automatic mounting calibration.</li>
            <li>
              Make sure your mounting orientations for your trackers in the
              server are correct. (you might have to lie about them for certain
              setups)
            </li>
            <li>
              If it's only off by a few degrees, shift your trackers inwards or
              outwards a bit, then full reset.
            </li>
          </ul>
          <h2 id="my-avatar-floats-above-the-ground">
            My avatar floats above the ground
          </h2>
          <ul>
            <li>
              Make sure your floor level is correct using OVRAdvancedSettings'
              fix floor function.
            </li>
            <li>
              Increase your User Real Height in VRChat or any equivalent setting
              in other games.
            </li>
          </ul>
          <h2 id="my-legs-dont-bend">
            <a href="#my-legs-dont-bend">My legs don't bend</a>
          </h2>
          <ul>
            <li>
              Make sure you have upper leg trackers above your knees and
              assigned as "upper leg" trackers as well as lower leg trackers
              below your knees assigned as "lower leg" trackers.
            </li>
            <li>
              Make sure your lower legs trackers are on your lower legs and not
              your feet.
            </li>
          </ul>
          <h2 id="my-legs-cross-when-sitting-down">
            My legs cross when sitting down
          </h2>
          <ul>
            <li>Use the experimental Automatic mounting calibration.</li>
            <li>Try mounting your upper leg trackers more inwards.</li>
            <li>
              Try mounting your upper leg trackers higher on your thighs or
              lower on your upper legs depending on your build.
            </li>
            <li>
              Calibrate with your legs straight and a normal hip width (24-32)
              in your body proportions.
            </li>
            <li>
              Use yaw reset to correct leg crossing:{" "}
              <a href="server/setting-reset-bindings.html">
                assigning a keybind for resetting
              </a>
              .
            </li>
          </ul>
          <h2 id="one-of-my-leg-is-higher-than-the-other">
            One of my leg is higher than the other
          </h2>
          <p>
            Shift your upper leg trackers a bit; try out other mounting
            positions and orientations for your upper leg trackers
          </p>
          <h2 id="webview2-is-missing--slimevr-gui-crashes-immediately--panicked-at--webview2error">
            WebView2 is missing / SlimeVR GUI crashes immediately / "panicked at
            ... WebView2Error"
          </h2>
          <p>
            It's possible that you don't have the required WebView2 component
            installed, you can download the WebView2 installer from{" "}
            <a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/consumer/">
              https://developer.microsoft.com/en-us/microsoft-edge/webview2/consumer/
            </a>
            . To ensure that WebView2 installs properly, run the WebView2
            installer as an administrator (right click, then click "Run as
            administrator") and make sure the installer is running from the C:
            drive on your computer. If it's still not working, try putting the
            installer in the root of the C: drive (ex.{" "}
            <code className="hljs">C:\MicrosoftEdgeWebview2Setup.exe</code>) and
            running it from there.
          </p>
          <h2 id="quest-pro-controllers-cause-high-latency--lag">
            <a href="#quest-pro-controllers-cause-high-latency--lag">
              Quest Pro controllers cause high latency / lag
            </a>
          </h2>
          <p>
            Quest Pro controllers can use 2.4 GHz Wi-Fi to connect to your
            headset, this can cause interference with SlimeVR trackers since
            they also use 2.4 GHz Wi-Fi. The easiest current solution is to
            change the channel that your 2.4 GHz Wi-Fi is on, though this may
            not always work. If you want to find the Quest Pro controller's
            Wi-Fi, it should be called something like "DIRECT-Meta-XXXX". You
            can read the{" "}
            <a href="https://www.meta.com/help/quest/articles/getting-started/getting-started-with-quest-pro/wi-fi-troubleshooting-touch-pro-controllers/">
              Meta support article for Wi-Fi troubleshooting for the Quest Pro
              controllers
            </a>{" "}
            for more information.
          </p>
          <h2 id="slimevr-gui-keeps-timing-out--connection-lost-to-the-server-trying-to-reconnect-repeatedly">
            SlimeVR GUI keeps timing out / "Connection lost to the server.
            Trying to reconnect..." repeatedly
          </h2>
          <p>
            If your SlimeVR GUI is repeatedly timing out from the SlimeVR server
            (check the logs), you may be able to fix this by running the
            following command in an administrator console:{" "}
            <code className="hljs">
              netsh int tcp set supplemental internet congestionprovider=default
            </code>
            . This is caused by non-default Windows network configurations
            commonly used by modified OSes.
          </p>
        </div>
      </DocsContainer>
    </>
  );
}

export default IssuesPage;
