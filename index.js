window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const keys = document.querySelectorAll(".keyboard div");
  const visual = document.querySelector(".visual");
  const deletebuttom = document.querySelector(".delete_buttom");
  const on_off = document.querySelector(".on_off");
  const play = document.querySelector(".play_buttom");
  const how_to_btn = document.querySelector(".modal_btn");
  const modalBg = document.querySelector(".modal_bg");
  const close = document.querySelector(".modal_close");
  let count = 0;
  let play_list = [];
  let currentTrackIndex = 0;
  let delayBy = 000;
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#7160d3",
    "#60bcd3",
    "#0bad21",
    "#207a91",
    "#f0de3f",
    "#d61b9e",
    "#af151d",
    "#d39d60",
  ];
  const notes = [];

  //Adding sounds
  keys.forEach((key, idx) => {
    key.addEventListener("click", function () {
      sounds[idx].currentTime = 0;
      sounds[idx].play();
      play_list.push(sounds[idx].src);
      createBubbles(idx);
      // console.log(play_list);
    });
  });

  //Create animation
  const createBubbles = idx => {
    const bubble = document.createElement("div");
    bubble.innerHTML = "🎵";

    visual.append(bubble);
    bubble.style.backgroundColor = colors[idx];
    bubble.style.animation = `out 1s ease`;
    notes.push(bubble);
    count++;
    if (count > 70) {
      bubble.addEventListener("animationend", function () {
        visual.removeChild(this);
        count--;
        play_list.pop();
      });
    }
  };

  //delet buttom
  deletebuttom.addEventListener("click", function () {
    const bubble = document.querySelectorAll(".visual div");
    visual.removeChild(bubble[bubble.length - 1]);
    count--;
    play_list.pop();
    notes.pop();
  });

  //sound on or off
  on_off.addEventListener("click", function () {
    sounds.forEach(sound => {
      if (sound.muted) {
        sound.muted = false;
        test.muted = false;
        on_off.innerHTML = "on";
      } else {
        sound.muted = true;
        test.muted = true;
        on_off.innerHTML = "off";
      }
    });
  });

  // play all sounds
  play.addEventListener("click", function () {
    let play_audio = document.getElementById("test");
    if (this.className == "is-playing play_buttom") {
      this.className = "play_buttom";
      this.innerHTML = "play";
      play_audio.pause();
    } else {
      this.className = "is-playing play_buttom";
      play_audio.src = play_list[0];
      currentTrackIndex = 0;
      notes[currentTrackIndex].classList.add("jump");
      this.innerHTML = "pause";
      play_audio.play();
    }
  });

  document.getElementById("test").addEventListener("ended", function (e) {
    let play_audio = document.getElementById("test");
    setTimeout(function () {
      notes[currentTrackIndex].classList.remove("jump");
      currentTrackIndex++;
      if (currentTrackIndex < play_list.length) {
        play_audio.src = play_list[currentTrackIndex];
        play_audio.play();
        notes[currentTrackIndex].classList.add("jump");
        play_audio.playbackRate = 1.5;
        // console.log(notes);
        if (currentTrackIndex == play_list.length - 1) {
          play.innerHTML = "play";
          play.className = "play_buttom";
        }
      }
    }, 0);
  });

  document
    .querySelector(".header_content1")
    .addEventListener("click", function (e) {
      let play_audio = document.querySelector(".header_content1 audio");
      play_audio.play();
    });

  // play.addEventListener("click", function () {
  //   playbuttom.src = count[0];
  //   playbuttom.play();
  //   let i = 1;
  //   playbuttom.addEventListener("ended", function () {
  //     while (i < count.length) {
  //       playbuttom.src = count[i];
  //       playbuttom.play();
  //       i++;
  //     }
  //   });
  // });

  // how to play btn
  how_to_btn.addEventListener("click", function () {
    modalBg.classList.add("active");
  });
  close.addEventListener("click", function () {
    modalBg.classList.remove("active");
  });
});
