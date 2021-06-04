window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const keys = document.querySelectorAll(".keyboard div");
  const visual = document.querySelector(".visual");
  const deletebuttom = document.querySelector(".delete_buttom");
  const on_off = document.querySelector(".on_off");
  const play = document.querySelector(".play_buttom");
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
  ];
  const jumps = ["jump1", "jump2", "jump3", "jump4", "jump5", "jump6"];
  //Adding sounds
  keys.forEach((key, idx) => {
    key.addEventListener("click", function () {
      sounds[idx].currentTime = 0;
      sounds[idx].play();
      play_list.push(sounds[idx].src);
      createBubbles(idx);
      console.log(play_list);
    });
  });

  //Create animation
  const createBubbles = idx => {
    const bubble = document.createElement("div");
    bubble.innerHTML = "🎵";

    visual.append(bubble);
    bubble.style.backgroundColor = colors[idx];
    bubble.style.animation = `${jumps[idx]} 1s ease`;
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
      this.innerHTML = "pause";
      play_audio.play();
    }
  });

  document.getElementById("test").addEventListener("ended", function (e) {
    let play_audio = document.getElementById("test");
    setTimeout(function () {
      currentTrackIndex++;
      if (currentTrackIndex < play_list.length) {
        play_audio.src = play_list[currentTrackIndex];
        play_audio.play();
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
});