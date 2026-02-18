import DocsContainer from "../components/docs/DocsContainer";
import { Link } from "react-router";

function SetupPage() {
  return (
    <>
      <DocsContainer>
        <div className="docs-body">
          <>
            <h1 id="quick-setup">Quick Setup</h1>
            <p>
              If you are using phones, DIY trackers or substituting some body
              locations with anything not prebuilt there are added
              complications.
            </p>

            <ul>
              <li>
                <a href="#making-sure-your-system-is-ready">
                  Making sure your system is ready
                </a>
              </li>

              <li>
                <a href="#install-the-latest-slimevr-installer">
                  Install the latest SlimeVR Installer
                </a>
              </li>

              <li>
                <a href="#connecting-and-preparing-your-trackers">
                  Connecting and preparing your trackers
                </a>
              </li>

              <li>
                <a href="#choosing-and-assigning-body-locations">
                  Choosing and assigning body locations
                </a>
              </li>
              <li>
                <a href="#automatically-setting-mounting">
                  Automatically setting mounting
                </a>
              </li>

              <li>
                <a href="#reset-tutorial">Reset Tutorial</a>
              </li>

              <li>
                <a href="#configuring-proportions">Configuring Proportions</a>
              </li>
              <li>
                <a href="#manual-proportions">Manual Proportions</a>
              </li>
              <li>
                <a href="final-settings">Final settings</a>
              </li>

              <li>
                <a href="#spawning-trackers">Spawning trackers</a>
              </li>
              <li>
                <a href="#osc">OSC</a>
              </li>

              <li>
                <a href="#alternative-wi-fi-options">
                  Alternative Wi-Fi Options
                </a>
              </li>

              <li>
                <a href="#congratulations-your-slime-trackers-should-now-be-set-up">
                  Congratulations, your Slime trackers should now be set up!
                </a>
              </li>
            </ul>

            <h2 id="making-sure-your-system-is-ready">
              Making sure your system is ready
            </h2>
            <p>
              If you are intending to use SteamVR with your slimes, make sure it
              is installed and <strong>run it at least once</strong> before
              moving forward.
            </p>
            <h2 id="install-the-latest-slimevr-installer">
              Install the latest SlimeVR Installer
            </h2>
            <p>
              The latest SlimeVR Installer can be found <a href="https://slimevr.dev/download" target="_blank">here</a>. Download it and
              install it, this installer can be used to update the server
              software in the future.
            </p>
            <p>
              If you are on Windows and encounter the following pop up, click{" "}
              <em>
                <strong>More info</strong>
              </em>{" "}
              text to show the run button. Once it is visible, click{" "}
              <strong>Run anyway</strong> to progress.
            </p>
            <p>
              <img
                src="page-assets/quick_protected.png"
                alt="Windows defender"
                style={{
                  maxWidth: "45%",
                  margin: "0 2%",
                  display: "inline-block",
                }}
              />
              <img
                src="page-assets/quick_runAnyway.png"
                alt="Windows defender"
                style={{
                  maxWidth: "45%",
                  margin: "0 2%",
                  display: "inline-block",
                }}
              />
            </p>
            <p>
              If this doesn't solve your issues, try unblocking the file via
              right clicking on it, properties, and then ticking the{" "}
              <strong>Unblock</strong> checkbox.
            </p>
            <p>
              <img
                src="page-assets/quick_windowsProperties.png"
                alt="Properties unblock"
              />
            </p>
            <p>
              Once you have the installer launched, click{" "}
              <strong>Next &gt;</strong> to move through the process. Be sure
              not to change the pre-checked install packages for use with
              SteamVR.
            </p>
            <p>
              <img
                src="page-assets/quick_installer.png"
                alt="The Installer wizard"
              />
            </p>
            <p>
              Bear in mind, if you plan on using the server purely for{" "}
              standalone usage via OSC , and not PC VR via SteamVR, you can
              de-select <strong>SteamVR Driver</strong>,{" "}
              <strong>SlimeVR Feeder App</strong>, and{" "}
              <strong>USB drivers</strong>. If you don't already have SteamVR
              installed and have launched it previously, you may encounter an
              error.
            </p>
            <h2 id="connecting-and-preparing-your-trackers">
              Connecting and preparing your trackers
            </h2>
            <ol>
              <li>
                <p>
                  Open the SlimeVR Server. On this first page you can change the
                  applications language via the button on the bottom right. Once
                  you are ready click <strong>Let's get set up!</strong>
                </p>
                <p>
                  <img
                    src="page-assets/quick_intro.png"
                    alt="The first page of the SlimeVR Wizard"
                  />
                </p>
              </li>
              <li>
                <p>
                  Input your 2.4GHz Wi-Fi credentials, so that your tracker can
                  connect to Wi-Fi, then click <strong>Submit</strong>.
                </p>
                <p>
                  <img
                    src="page-assets/quick_wifi.png"
                    alt="Inputting WiFi credentials"
                  />
                </p>
              </li>
              <li>
                <p>
                  Plug your trackers in one at a time and turn them on, you
                  should see the progress bar on the left update to show the
                  Wi-Fi details being sent. Make sure you use the cable included
                  with your trackers, as other cables may not be suited to send
                  data.
                </p>
                <p>
                  <img
                    src="page-assets/quick_connectTracker.gif"
                    alt="Animation of the connection process"
                  />
                </p>
              </li>
              <li>
                <p>
                  Once you have connected all your trackers, you should see them
                  listed with numbers on the right. If you have forgotten which
                  trackers have yet to be plugged in, shaking a connected
                  tracker will highlight it in the list. Click{" "}
                  <strong>I connected all my trackers</strong> once you are
                  finished.
                </p>
                <p>
                  <img
                    src="page-assets/quick_trackerConnected.png"
                    alt="Connect trackers page"
                  />
                </p>
              </li>
              <li>
                <p>
                  Following the directions shown on the page, place your
                  trackers on a flat surface while powered on and click{" "}
                  <strong>I placed my trackers on the table</strong> before
                  waiting for the process to complete.
                </p>
                <p>
                  <img
                    src="page-assets/quick_calibrate.png"
                    alt="Calibration page"
                  />
                </p>
                <p>
                  Please note: You should calibrate your trackers by following
                  this same process every time you switch them on to use them!
                </p>
              </li>
              <li>
                <p>
                  Once calibration is complete, click <strong>Continue</strong>{" "}
                  to continue.
                </p>
                <p>
                  <img
                    src="page-assets/quick_calibrateComplete.png"
                    alt="Calibration complete"
                  />
                </p>
              </li>
            </ol>
            <h2 id="choosing-and-assigning-body-locations">
              Choosing and assigning body locations
            </h2>
            <ol>
              <li>
                <p>
                  Figure out which body parts you will need to assign. Depending
                  on how many trackers you have these are the suggested
                  locations:
                </p>
                <ul>
                  <li>
                    Basic Set (5 trackers) - Chest, both thighs, both ankles.
                  </li>
                  <li>
                    Standard Set (5 trackers with one extension) - Chest and
                    hip/waist (via the tracker with an extension), both thighs,
                    both ankles.
                  </li>
                  <li>
                    Enhanced Core Set (5 trackers with three extensions) - Chest
                    and hip/waist (via trackers with extension), both thighs,
                    both ankles and feet (via trackers with extensions).
                  </li>
                  <li>
                    Elite Set (7 trackers with three extensions) - Both upper
                    arms, chest and hip/waist (via trackers with extension),
                    both thighs, both ankles and feet (via trackers with
                    extensions).
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Using this list choose the location on SlimeVR's mascot,
                  Nighty, that corresponds with the area you wish to choose a
                  tracker for.
                </p>
                <p>
                  <img
                    src="page-assets/quick_assign.png"
                    alt="Tracker location page"
                  />
                </p>
              </li>
              <li>
                <p>
                  While the pop up is open, you can tap the tracker you wish to
                  use for that location twice to automatically assign it. You
                  can also choose the specific tracker in the list you wish to
                  assign if you find that easier.
                </p>
                <p>
                  <img
                    src="page-assets/quick_assignPopup.png"
                    alt="Tracker list pop up for choosing the right tracker"
                  />
                </p>
              </li>
              <li>
                <p>
                  Once you have assigned all your trackers, click{" "}
                  <strong>I'm ready</strong> to move forward.
                </p>
              </li>
              <li>
                <p>
                  Take a moment to put all of your trackers on. You can wear
                  them on the front, back or either side of your body at the
                  location marked, taking note of the following suggestions:
                </p>
                <ul>
                  <li>
                    Heavily muscular areas tend to deform easily and can throw
                    off tracking, try to find a position that minimises this.
                  </li>
                  <li>
                    The diagram of Nighty should give you a rough area for where
                    to wear them, but you can rotate the position around your
                    body. For example, the chest tracker could be more
                    comfortable on the front <em>or</em> back depending on
                    clothing and body shapes.
                  </li>
                  <li>
                    Make sure your trackers are at a cardinal direction from
                    you, they must be facing <strong>front</strong>,{" "}
                    <strong>back</strong>, <strong>left</strong> or{" "}
                    <strong>right</strong>.
                  </li>
                  <li>
                    Make sure your trackers are the right way up, the Slime's
                    face should upright with the flat part of the tracker facing
                    towards the floor.
                  </li>
                  <li>
                    Once you have the tracker on, try moving around and see if
                    they sit still during movement. Some areas (such as ankles)
                    work a lot better on the side of the ankle instead of the
                    front.
                  </li>
                  <li>
                    All bodies are different! Mounting orientations that work
                    for others might not work for you, and you might need to
                    experiment to find the best place for you.
                  </li>
                </ul>
                <p>
                  Once you have your trackers on, hit <em>I'm ready</em> to move
                  to the next step.
                </p>
              </li>
              <li>
                <p>
                  SlimeVR offers an automatic and manual process for determining
                  mounting orientation, automatic calibration can lead to better
                  tracking quality, but improper calibration can make it worse.
                  It requires some time to figure out and check if it's right
                  for you and the way you put on your trackers. We're working on
                  making it better, but we suggest{" "}
                  <strong>new users use the manual process</strong>.
                </p>
                <p>
                  <img
                    src="page-assets/quick_mountingChoice.png"
                    alt="Manual or Automatic mounting page"
                  />
                </p>
              </li>
              <li>
                <p>
                  Click on one of your trackers to bring up a list of mounting
                  orientations.
                </p>
                <p>
                  <img
                    src="page-assets/quick_mountingManual.png"
                    alt="Manual mounting page"
                  />
                </p>
              </li>
              <li>
                <p>
                  Choose the orientation that best represents the mounting
                  orientation of that tracker.
                </p>
                <p>
                  <img
                    src="page-assets/quick_mountingPopup.png"
                    alt="Manual mounting popup"
                  />
                </p>
              </li>
              <li>
                <p>
                  Repeat for each of your trackers, when you have completed this
                  process click <strong>Next step</strong>.
                </p>
              </li>
            </ol>
            <h3 id="automatically-setting-mounting">
              Automatically setting mounting
            </h3>
            <p>
              SlimeVR offers an automated process for recording which mounting
              orientation you have set up with your trackers, which can lead to
              issues for new users but for experienced users can give better
              results. Make sure you boot up SteamVR and put on your headset
              from this point. If you are using your trackers for only VMC or
              OSC, please use the previous steps for manually setting mounting
              orientation.
            </p>
            <p>
              During the automated process follow the directions and SlimeVR
              will deduce where the trackers are on your body.
            </p>
            <blockquote>
              <p>
                <strong>Note:</strong> Automatic mounting may not work if you do
                not have your headset on and SteamVR running. Automatic mounting
                can lead to better tracking quality, but improper calibration
                can make it worse. Only choose this option if you are
                experienced with SlimeVR.
              </p>
            </blockquote>
            <p>
              <img
                src="page-assets/quick_mountingAuto.png"
                alt="The automatic process for determining facing location"
              />
            </p>
            <h2 id="reset-tutorial">Reset Tutorial</h2>
            <ol>
              <li>
                <p>
                  Follow the process to learn about the three different types of
                  resets built into the trackers:
                </p>
                <p>
                  <img
                    src="page-assets/quick_reset.png"
                    alt="Reset Tutorials"
                  />
                </p>
                <ul>
                  <li>
                    <strong>Tapping Chest</strong> - Yaw reset, resets the
                    trackers to assume they are facing their defined mounting
                    orientation.
                  </li>
                  <li>
                    <strong>Tapping Left Thigh</strong> - Full reset, resets the
                    trackers to the assumption that you are in an I-pose.
                  </li>
                  <li>
                    <strong>Tapping Right Thigh</strong> - Mounting reset,
                    resets the trackers to an estimated mounting orientation.
                    You must be in the ski position as illustrated in the
                    mounting calibration wizard for this to work.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  To move through this process, follow the steps shown and tap
                  the indicated tracker.
                </p>
              </li>
            </ol>
            <h2 id="configuring-proportions">Configuring Proportions</h2>
            <ol>
              <li>
                <p>
                  The last configuration is for SlimeVR to figure out what your
                  proportions are! This is a vital step to replicating your
                  movements in virtual space.
                </p>
                <p>
                  <img
                    src="page-assets/quick_proportionsChoice.png"
                    alt="Manual or Automatic Proportions page"
                  />
                </p>
                <p>
                  If you are using SlimeVR with SteamVR, you can automate this
                  process. Make sure that you are wearing your trackers and your
                  headset, and that SteamVR is running. It is very important to
                  have a properly set floor from your headset as well before
                  trying this.
                </p>
                <p>
                  If you are not using SlimeVR with SteamVR, you will have to{" "}
                  <a href="#manual-proportions">
                    manually set your proportions
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Follow the prompts in order to have SlimeVR measure your
                  proportions automatically.
                </p>
                <blockquote>
                  <p>
                    <strong>Note:</strong> Automatic proportions will not work
                    if you do not have your headset on and SteamVR running. Do
                    not lift or move your feet at all during this process.
                  </p>
                </blockquote>
                <p>
                  <img
                    src="page-assets/quick_proportionsAuto.png"
                    alt="Automatic proportions wizard"
                  />
                </p>
              </li>
            </ol>
            <h3 id="manual-proportions">Manual Proportions</h3>
            <p>
              If you are not using SteamVR you will have to manually set each of
              these values or use VRChat OSC Query to enable the use of
              automatic proportions. For more information on how to measure each
              value please refer to the information at the top of the{" "}
              <a href="server/body-config.html#measurements">
                body proportions configuration page
              </a>
              .
            </p>
            <p>
              <img
                src="page-assets/quick_proportionsManual.png"
                alt="Manual proportions"
              />
            </p>
            <p>
              For more information on how to set up VRChat OSC Query please
              refer to the [mobile installation]
            </p>
            <h2 id="final-settings">Final settings</h2>
            <p>
              The last step is to go to the settings page and set up the
              specifics of how you want to use it.
            </p>
            <h3 id="spawning-trackers">Spawning trackers</h3>
            <p>
              The SlimeVR Server now has automatic assignment of SteamVR
              trackers, this shows what will activate for each set with that
              toggle on:
            </p>
            <ul>
              <li>
                Lower-Body Set (5 trackers) - Chest, waist, knees and feet.
              </li>
              <li>
                Core Set (5 trackers with one extension) - Chest, waist, knees
                and feet.
              </li>
              <li>
                Enhanced Core Set (5 trackers with three extensions) - Chest,
                waist, knees and feet.
              </li>
              <li>
                Full-Body Set (7 trackers with three extensions) - Chest, waist,
                knees, feet and elbows.
              </li>
            </ul>
            <p>
              <img
                src="page-assets/quick_settingsPage.png"
                alt="SteamVR Settings"
              />
            </p>
            <h3 id="osc">OSC</h3>
            <p>
              If you are primarily using OSC, make sure you first disable all of
              the trackers for SteamVR before going to OSC on the settings page.
            </p>
            <p>
              <img src="page-assets/quick_oscSettings.png" alt="OSC Settings" />
            </p>
            <p>
              If you wish to change to SteamVR trackers you will have to disable
              OSC and turn the SteamVR trackers back on first.
            </p>
            <p>
              For more information on OSC, please visit the{" "}
              <a href="server/osc-information.html">OSC page</a>.
            </p>
            <p>
              <strong>More info to come on this process soon.</strong>
            </p>
            <main>
              <h3 id="alternative-wi-fi-options">Alternative Wi-Fi Options</h3>
              <h4 id="windows-mobile-hotspot">Windows Mobile Hotspot</h4>
              <p>
                You can set up a Wi-Fi hotspot through Windows using the Mobile
                Hotspot feature.
              </p>
              <ol>
                <li>
                  Navigate in Windows settings to{" "}
                  <a href="ms-settings:network-mobilehotspot">
                    Settings &gt; Network &amp; internet &gt; Mobile hotspot
                  </a>
                  .
                </li>
                <li>
                  Under the "Properties" section, click Edit and set the name
                  and password to whatever you want.
                  <ul>
                    <li>
                      Ensure that the "Band" (aka "Network band") is set to 2.4
                      GHz for SlimeVR trackers. The hotspot can only be 2.4 GHz
                      or 5 GHz and not both, so if it's set to "Any" or 5 GHz,
                      then it will not support 2.4 GHz.
                    </li>
                  </ul>
                </li>
                <li>
                  Once you have configured the network, you can toggle the
                  "Mobile hotspot" on.
                </li>
              </ol>
            </main>

            <h2 id="congratulations-your-slime-trackers-should-now-be-set-up">
              Congratulations, your Slime trackers should now be set up!
            </h2>
            <p>
              <img
                src="page-assets/quick_allDone.png"
                alt="Setup complete page"
              />
            </p>
            <h3 id="putting-them-on-again-after-this-setup">
              Putting them on again after this setup
            </h3>
            <p>
              The next time you want to use your trackers, all you need to do is
              put them on and go through the Mounting Calibration wizard
              quickly. All other settings should be saved from your initial
              setup! Make sure that you have your headset on and SteamVR running
              before going through this process.
            </p>
            <h3 id="having-problems">Having problems?</h3>
            <p>
              <strong>My trackers in SteamVR aren't set up properly</strong>
            </p>
            <p>
              If this is in SteamVR before launching any games, go to Settings
              &gt; Controllers &gt; Manage Vive Trackers, and manually set up
              the trackers' positions to match the virtual trackers' names. If
              this is in game it could be a calibration issue!
            </p>
            <p>
              For all other problems, check the{" "}
              <Link
                to={{
                  pathname: "/issues",
                }}
              >
                Common Issues page
              </Link>
            </p>
          </>
        </div>
      </DocsContainer>
    </>
  );
}

export default SetupPage;
