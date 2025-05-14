import "@/styles/globals.css";

export default function Home() {
  return (
    <body>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap"
          rel="stylesheet"
        />

        <div
          className="flex font-['Oxanium'] text-sm/4.5 h-screen text-gr-light bg-center "
          style={{ backgroundImage: "url('Background.png')" }}
        >
          <div className="sidebar px-1 w-1/16 bg-sidebar  font-[oxanium]  flex flex-col items-center">
            <div className="logo   cursor-pointer">
              <img
                src="./icons/Rize logo.png"
                alt=""
                className="h-10 w-6.5 my-7"
              />
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Dashboard.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Games
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Dashboard.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Dashboard
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Players.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Players
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Union.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Clubs
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Federations.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Federations
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Tournament.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Tournament
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/League.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                League
              </span>
            </div>

            <div className="flex flex-col items-center  group cursor-pointer">
              <div className="relative p-2.5 rounded-full ">
                <div className="absolute inset-0 rounded-full bg-accent-600/30 opacity-0 blur-sm scale-80  group-hover:opacity-80"></div>

                <img
                  src="./icons/Group Finder.png"
                  alt="Games"
                  className="relative z-10 w-6 h-6"
                />
              </div>

              <span className=" group-hover:text-accent-600 transition duration-300">
                Group Finder
              </span>
            </div>

            <div className="Games  flex flex-col  items-center  ">
              <div className="image py-5  px-5 flex items-center justify-center bg-radial from-accent-600/30 from-10% to bg-transparent  to-70% ">
                <img
                  src="./icons/Games.png"
                  className="s h-[20] w-[20] "
                  alt="Games"
                />
              </div>

              <h3 className="mb-6 text-accent-600">Games</h3>
            </div>
            <div className="profile-setting gap-7 flex flex-col items-center mt-auto">
              <div className="setting">
                <img src="./icons/Settings.png" alt="Settings" />
              </div>
              <div className="relative inline-block mb-10">
                <div className="profile-pic outline-offset-3 rounded-[50%] outline-accent-600 outline-2 ">
                  <img src="avatar.png" alt="" />
                  <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-accent-600 border-2 "></span>
                </div>
              </div>
            </div>
          </div>
          <div className="channels-cont w-2/9 flex flex-col ">
            <div
              className="game-topbar aspect-[4/2.5] overflow-hidden rounded-tr-[40px]  bg-cover bg-center bg-gray-700/75 bg-blend-overlay"
              style={{ backgroundImage: "url('valocover.png')" }}
            >
              <div className="channel-top-bar  py-2 flex justify-between px-5  backdrop-blur-sm bg-white/7 bg-blend-overlay">
                <div className="game-logos h-10 flex items-center  gap-5">
                  <img src="image 91.png" className="h-9" alt="" />
                  <h2 className="font-semibold  text-xl text-white">
                    Valorant
                  </h2>
                </div>
                <div className="channelsstats flex  h-10  items-center  gap-5">
                  <div className="users flex h-5">
                    <img src="./icons/Players.png" alt="" />
                    <p>259</p>
                  </div>

                  <div className="ship flex h-5">
                    <img src="./icons/Union.png" alt="" />
                    <p>8</p>
                  </div>
                  <div className="down-arrow ml-3 ">
                    <img src="./icons/down.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="channels grow py-5  flex flex-col px-8 text-lg bg-darkblue gap-5">
              <div className="brows-channels-search  relative flex gap-4 items-center">
                <div className=" absolute search-icon flex justify-center items-center pl-1.5 ">
                  <img
                    src="./icons/Search.png"
                    className="inset-y-0 start-0 w-7  "
                    alt=""
                  />
                </div>

                <input
                  type="text"
                  className="h-13 text-white
                  focus:outline-accent-600 pl-10 rounded-2xl
                "
                  placeholder="Browse Channels"
                />
              </div>
              <div className="Rules-Annou flex flex-col gap-5">
                <span className=" bg-radial from-accent-600/30 from-1% to bg-transparent  to-60%  ">
                  <hr className=" h-[1px] mt-2 border-0 bg-gray-700 " />
                </span>
                <div className="rules flex gap-5 hover:text-accent-600 cursor-pointer w-fit">
                  <div className="channel-logo aspect-square p-0.5 ">
                    <img className="h-7" src="./icons/Rules.png" alt="" />{" "}
                  </div>

                  <p>Rules</p>
                </div>
                <div className="Announces flex gap-5  hover:text-accent-600 cursor-pointer w-fit">
                  <div className="channel-logo aspect-square p-0.5">
                    <img
                      src="./icons/Announcements.png"
                      className="h-7"
                      alt=""
                    />
                  </div>

                  <p>Announcements</p>
                </div>
              </div>
              <div className="channels-modules flex flex-col gap-5">
                <span className=" bg-radial from-accent-600/30 from-1% to bg-transparent  to-60%  ">
                  <hr className=" h-[1px] mt-2 border-0 bg-gray-700 " />
                </span>
                <div className="channels-title flex">
                  <p className="text-white text-xl">Channels</p>
                  <div className="add ml-auto">
                    <p>+</p>
                  </div>
                </div>
                <div className="channels-wrapper flex flex-col gap-5 text-[20px]">
                  <div className="channels-toggle flex gap-1 items-center ">
                    <div className="channel-logo aspect-square p-0.5">
                      <p>⭐</p>
                    </div>
                    <p className="text-white text-lg">Gaming Rooms</p>
                    <div className="toggle-arrow ml-auto">
                      <img src="./icons/down.png" className="h-4" alt="" />
                    </div>
                  </div>
                  <div className="channels-titles flex flex-col gap-5 ">
                    <div className="channel flex gap-5 hover:text-accent-600 cursor-pointer w-fit">
                      <div className="channel-logo aspect-square p-0.5  ">
                        <img
                          className="h-7"
                          src="./icons/Disable Tag.png"
                          alt=""
                        />
                      </div>
                      <p className="channel-name ">Valorant Mena</p>
                    </div>
                    <div className="channel flex gap-5 hover:text-accent-600 cursor-pointer w-fit">
                      <div className="channel-logo aspect-square p-0.5">
                        <img
                          className="h-7"
                          src="./icons/Disable Tag.png"
                          alt=""
                        />
                      </div>
                      <p className="channel-name">Valorant Saudi</p>
                    </div>
                    <div className="channel flex gap-5 hover:text-accent-600 cursor-pointer w-fit">
                      <div className="channel-logo aspect-square p-0.5">
                        <img
                          className="h-7"
                          src="./icons/Disable Tag.png"
                          alt=""
                        />
                      </div>
                      <p className="channel-name">Valorant Egypt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-content-wrapper  grow pt-4 px-2 flex flex-col my-4">
            <div className="title flex justify-between mb-17  ">
              <h1 className="font-medium text-white text-2xl pt-2 pl-3">
                # Valorant
              </h1>
              <div className="Finder-search  relative flex gap-4 items-center">
                <input
                  type="text"
                  className="h-13 text-white
                  focus:outline-accent-600 pl-10 focus:outline-1 rounded-2xl flex-1
                "
                  placeholder=""
                />
                <div className=" absolute right-2">
                  <img src="./icons/Search.png" className="w-7 " alt="" />
                </div>
              </div>
            </div>
            <div
              className="messages  overflow-y-auto  max-h-[calc(100vh-16rem)] text-white flex flex-col gap-8 px-7 font-bold  text-md
            [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:bg-gray-700/20
    [&::-webkit-scrollbar-thumb]:rounded-full

            "
            >
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative ">
                  <img src="avatar2.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-gr-mid  outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-pink">Alexandra Tillman</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="message-reactions text-lg font-normal">
                    <div className="reaction-cont ">
                      <div className="reaction h-9 w-16 gap-2 bg-black/20 rounded-md flex items-center justify-center outline-gray-400/50 outline-1  hover:bg-accent-600/30 hover:cursor-pointer">
                        <img src="./icons/Heart.png" className="w-7" alt="" />
                        <p>2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-break flex justify-center items-center">
                <div className="border-t  border-gr-mid flex-grow"></div>
                <p className="px-3 text-gr-mid font-light text-md">
                  June 06, 2023
                </p>
                <div className="border-t border-gr-mid flex-grow"></div>
              </div>
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative">
                  <img src="avatar1.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-accent-600 border-0 outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-orange">Sam McDermot</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="message-reactions text-lg font-normal">
                    <div className="reaction-cont flex gap-2">
                      <div className="reaction h-9 w-16 gap-2 bg-black/20 rounded-md flex items-center justify-center outline-cyan-200/50 outline-1   hover:bg-accent-600/30 hover:cursor-pointer">
                        <img src="./icons/Heart.png" className="w-7" alt="" />
                        <p>2</p>
                      </div>
                      <div className="reaction h-9 w-16 gap-2 bg-black/20 rounded-md flex items-center justify-center outline-cyan-200/50 outline-1   hover:bg-accent-600/30 hover:cursor-pointer">
                        <img src="./icons/Fire.png" className="w-7" alt="" />
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative ">
                  <img src="avatar2.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-gr-mid  outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-pink">Alexandra Tillman</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative">
                  <img src="avatar1.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-accent-600 border-0 outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-orange">Sam McDermot</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="message-reactions text-lg font-normal">
                    <div className="reaction-cont ">
                      <div className="reaction h-9 w-16 gap-2 bg-black/20 rounded-md flex items-center justify-center outline-cyan-200/50 outline-1   hover:bg-accent-600/30 hover:cursor-pointer">
                        <img src="./icons/Fire.png" className="w-7" alt="" />
                        <p className=" text-xl">1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative ">
                  <img src="avatar2.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-gr-mid  outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-pink">Alexandra Tillman</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative">
                  <img src="avatar1.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-accent-600 border-0 outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-orange">Sam McDermot</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="message-reactions text-lg font-normal">
                    <div className="reaction-cont ">
                      <div className="reaction h-9 w-16 gap-2 bg-black/20 rounded-md flex items-center justify-center outline-cyan-200/50 outline-1   hover:bg-accent-600/30 hover:cursor-pointer">
                        <img src="./icons/Heart.png" className="w-7" alt="" />
                        <p className=" text-xl">2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative ">
                  <img src="avatar2.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-gr-mid  outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-pink">Alexandra Tillman</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content-container flex gap-4">
                <div className="profile-pic-msg aspect-square h-16 relative">
                  <img src="avatar1.png" className="h-16" alt="profile pic" />
                  <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full bg-accent-600 border-0 outline-4 outline-darkblue "></span>
                </div>
                <div className="top-msg-cont flex flex-col gap-4">
                  <div className="message-content flex flex-col">
                    <div className="message-title flex items-center gap-3">
                      <p className=" text-orange">Sam McDermot</p>
                      <p className=" text-xs/4 font-light text-gr-mid">
                        {" "}
                        05/06/2023 12:50PM
                      </p>
                    </div>
                    <div className="message-text">
                      <p className="font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              action=""
              className="h-25 mt-7 flex p-5 bg-darkblue rounded-4xl items-center gap-2"
            >
              <div className="attachement h-15 w-15 bg-gr-dark rounded-full flex items-center justify-center">
                <label htmlFor="attachment" className="">
                  <img src="./icons/File.png" alt="" />
                </label>
                <input
                  type="file"
                  id="attachment"
                  className="hidden"
                  name="filename"
                />
              </div>
              <div className="text-input flex justify-center grow relative items-center">
                <input
                  type="text "
                  className=" grow bg-darkblue outline-1 outline-gr-dark  w-full h-17 p-2 rounded-xl"
                />
                <div className="attach-others absolute right-3.5 flex gap-4 h-14 p-2 items-center">
                  <div className="gif ">
                    <img src="./icons/GIF.png" className="h-6" alt="gif" />
                  </div>
                  <div className="stickers">
                    <img
                      src="./icons/Sticker.png"
                      className="h-6"
                      alt="stickers"
                    />
                  </div>
                  <div className="emojis">
                    <img src="./icons/Emoji.png" className="h-6" alt="emojis" />
                  </div>
                </div>
              </div>
              <div className="send ">
                <button
                  type="submit"
                  className="bg-cyan-200 h-15 w-15 rounded-full flex items-center justify-center"
                >
                  <img src="./icons/Send.png" className="h-6" alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="navigation-bar-FF flex flex-col text-xs/5 ">
            <div className="navigation-bar flex justify-end items-center gap-4 h-14 m-6 ">
              <div className="pin flex justify-center items-center p-3 bg-darkblue hover:bg-accent-600/50  cursor-pointer rounded-full">
                <img src="./icons/Pin.png" className="h-7" alt="pin" />
              </div>
              <div className="messages flex justify-center items-center p-3 bg-darkblue  hover:bg-accent-600/50  cursor-pointer rounded-full">
                <img src="./icons/Message.png" className="h-7" alt="messages" />
              </div>
              <div className="notifications relative flex justify-center items-center p-3 bg-darkblue  hover:bg-accent-600/50  cursor-pointer rounded-full">
                <img
                  src="./icons/Notification.png"
                  className="h-7"
                  alt="notifications"
                />

                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-accent-600   "></span>
              </div>
              <div className="drawer flex justify-center items-center p-3 bg-accent-600  rounded-full">
                <img src="./icons/Menu.png" className="h-7" alt="drawer" />
              </div>
            </div>

            <div className="finder-feed-wrapper flex justify-center flex-col h-9/10 w-md ">
              <div
                className="Finder-wrapper flex flex-col gap-4  bg-darkblue/30 rounded-l-4xl px-8 pt-6  max-h-[43vh] overflow-y-auto
              [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:bg-gray-700/20
    [&::-webkit-scrollbar-thumb]:rounded-full
              "
              >
                <h2 className="text-xl font-semibold text-white">Finder</h2>
                <div className="finder-filters flex gap-2 jus text-[14px]">
                  <div className="group-f hover:bg-accent-600/20 rounded-4xl bg-black/50 outline-gray-200/30 outline-1 py-2 px-6 hover:outline-accent-600 cursor-pointer ">
                    <p>Group</p>
                  </div>
                  <div className="Club-f Tournament-f rounded-4xl text-black bg-accent-600 outline-1 py-2 px-6">
                    <p>Club</p>
                  </div>
                  <div className="rounded-4xl hover:bg-accent-600/20 bg-black/50 outline-gray-200/30 outline-1 py-2 px-6 hover:outline-accent-600 cursor-pointer ">
                    <p>Tournament</p>
                  </div>
                </div>

                <div className="Finder-search  relative flex gap-4 items-center">
                  <div className=" absolute search-icon flex justify-center items-center pl-1.5 ">
                    <img
                      src="./icons/Search.png"
                      className="inset-y-0 start-0 w-7  "
                      alt=""
                    />
                  </div>

                  <input
                    type="text"
                    className="h-13 text-white
                  focus:outline-accent-600 pl-10 focus:outline-1 rounded-2xl flex-1
                "
                    placeholder="Search by Club name"
                  />
                </div>

                <div
                  className="Finder-elements flex flex-col gap-3 text-white overflow-y-auto 3 p-1 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:bg-gray-700/20
    [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  <div className="Finder-elemen outline-1 outline-cyan-200/20 flex p-4 rounded-3xl gap-2 items-center justify-between h-20">
                    <div className="logo">
                      <img src="shark.png" alt="logo" />
                    </div>
                    <div className="Finder-element-data flex flex-col gap-3">
                      <div className="fetitle flex gap-3">
                        <p className="text-base">Angry EA Sharks</p>
                        <img src="./icons/saudi.png" alt="country" />
                      </div>
                      <div className="event-time flex ">
                        <img
                          src="./icons/Time.png"
                          className="w-4 h-4"
                          alt=""
                        />
                        <p className="text-gray-400 text-sm ">:UTC/GMT +2</p>
                      </div>
                    </div>
                    <div className="join flex items-center justify-center outline-1 text-cyan-200 outline-cyan-200/50 px-4 py-2 bg-cyan-200/20 rounded-4xl">
                      <input type="button" value="Join Now" />
                    </div>
                  </div>

                  <div className="Finder-elemen outline-1 outline-cyan-200/20 flex p-4 rounded-3xl gap-2 items-center justify-between">
                    <div className="logo">
                      <img src="image 146.png" alt="logo" />
                    </div>
                    <div className="Finder-element-data flex flex-col gap-3">
                      <div className="fetitle flex gap-3">
                        <p className="text-base">We Scale Late</p>
                        <img src="./icons/saudi.png" alt="country" />
                      </div>
                      <div className="event-time flex ">
                        <img
                          src="./icons/Time.png"
                          className="w-4 h-4"
                          alt=""
                        />
                        <p className="text-gray-400 text-sm ">:UTC/GMT +2</p>
                      </div>
                    </div>
                    <div className="join flex items-center justify-center outline-1 text-cyan-200 outline-cyan-200/50 px-4 py-2 bg-cyan-200/20 rounded-4xl">
                      <input type="button" value="Join Now" />
                    </div>
                  </div>

                  <div className="Finder-elemen outline-1 outline-cyan-200/20 flex p-4 rounded-3xl gap-2 items-center justify-between">
                    <div className="logo">
                      <img src="image 147.png" alt="logo" />
                    </div>
                    <div className="Finder-element-data flex flex-col gap-3">
                      <div className="fetitle flex gap-3">
                        <p className="text-base">Baron Thieves</p>
                        <img src="./icons/saudi.png" alt="country" />
                      </div>
                      <div className="event-time flex ">
                        <img
                          src="./icons/Time.png"
                          className="w-4 h-4"
                          alt=""
                        />
                        <p className="text-gray-400 text-sm ">:UTC/GMT +2</p>
                      </div>
                    </div>
                    <div className="join flex items-center justify-center outline-1 text-cyan-200 outline-cyan-200/50 px-4 py-2 bg-cyan-200/20 rounded-4xl">
                      <input type="button" value="Join Now" />
                    </div>
                  </div>

                  <div className="Finder-elemen outline-1 outline-cyan-200/20 flex p-4 rounded-3xl gap-2 items-center justify-between">
                    <div className="logo">
                      <img src="image 148.png" alt="logo" />
                    </div>
                    <div className="Finder-element-data flex flex-col gap-3">
                      <div className="fetitle flex gap-3">
                        <p className="text-base">Tiltproofi-ish</p>
                        <img src="./icons/saudi.png" alt="country" />
                      </div>
                      <div className="event-time flex ">
                        <img
                          src="./icons/Time.png"
                          className="w-4 h-4"
                          alt=""
                        />
                        <p className="text-gray-400 text-sm ">:UTC/GMT +2</p>
                      </div>
                    </div>
                    <div className="join flex items-center justify-center outline-1 text-cyan-200 outline-cyan-200/50 px-4 py-2 bg-cyan-200/20 rounded-4xl">
                      <input type="button" value="Join Now" />
                    </div>
                  </div>

                  <div className="Finder-elements flex flex-col gap-3 text-white  p-1">
                    <div className="Finder-elemen outline-1 outline-cyan-200/20 flex p-4 rounded-3xl gap-2 items-center justify-between">
                      <div className="logo">
                        <img src="shark.png" alt="logo" />
                      </div>
                      <div className="Finder-element-data flex flex-col gap-3">
                        <div className="fetitle flex gap-3">
                          <p className="text-base">Angry EA Sharks</p>
                          <img src="./icons/saudi.png" alt="country" />
                        </div>
                        <div className="event-time flex ">
                          <img
                            src="./icons/Time.png"
                            className="w-4 h-4"
                            alt=""
                          />
                          <p className="text-gray-400 text-sm ">:UTC/GMT +2</p>
                        </div>
                      </div>
                      <div className="join flex items-center justify-center outline-1 text-cyan-200 outline-cyan-200/50 px-4 py-2 bg-cyan-200/20 rounded-4xl">
                        <input type="button" value="Join Now" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="feed-wrapper   mt-4 flex flex-col gap-5  bg-darkblue/30 rounded-l-4xl px-8 pt-8  max-h-[42vh] overflow-y-auto
              [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:bg-gray-700/20
    [&::-webkit-scrollbar-thumb]:rounded-full
              "
              >
                <h2 className="text-xl font-semibold text-white">Feed</h2>
                <div className="feed-contents flex flex-col gap-4">
                  <div className="feed-element flex gap-2 p-3 items-center outline-gray-200/20 outline-2 rounded-2xl">
                    <div
                      className="thumbnail h-25 rounded-lg aspect-square flex-1/3 bg-black/60 bg-blend-overlay flex items-center justify-center"
                      style={{ backgroundImage: "url('thumb1.png')" }}
                    >
                      <img src="./icons/Youtube.png" alt="YouTube Logo" />
                    </div>
                    <div className="Feed-text flex-2/3">
                      <h3 className="text-md text-white">
                        Lorem ipsum dolor sit amet Adipisci
                      </h3>
                      <p className="text-[12px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. , azs.
                      </p>
                    </div>
                  </div>

                  <div className="feed-element flex gap-2 p-3 items-center outline-gray-200/20 outline-2 rounded-2xl">
                    <div
                      className="thumbnail h-25 rounded-lg aspect-square flex-1/3 bg-black/60 bg-blend-overlay flex items-center justify-center"
                      style={{ backgroundImage: "url('thumb2.png')" }}
                    >
                      <img src="./icons/Youtube.png" alt="YouTube Logo" />
                    </div>
                    <div className="Feed-text flex-2/3">
                      <h3 className="text-md text-white">
                        Lorem ipsum dolor sit amet Adipisci
                      </h3>
                      <p className="text-[12px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. , azs.
                      </p>
                    </div>
                  </div>
                  <div className="feed-element flex gap-2 p-3 items-center outline-gray-200/20 outline-2 rounded-2xl">
                    <div
                      className="thumbnail h-25 rounded-lg aspect-square flex-1/3 bg-black/60 bg-blend-overlay flex items-center justify-center"
                      style={{ backgroundImage: "url('thumb3.png')" }}
                    >
                      <img src="./icons/Youtube.png" alt="YouTube Logo" />
                    </div>
                    <div className="Feed-text flex-2/3">
                      <h3 className="text-md text-white">
                        Lorem ipsum dolor sit amet Adipisci
                      </h3>
                      <p className="text-[12px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. , azs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
