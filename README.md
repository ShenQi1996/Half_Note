# Half Note

[Half Note](https://shenqi1996.github.io/Half_Note/)


## 1. Background and Overview

Half Note is a music maker that when the user clicks on it, will play a sound.

![half1](https://user-images.githubusercontent.com/68937006/122250482-b19a6000-ce97-11eb-9008-173a8ecd8edc.PNG)

## 2 Functionlity

The User will be able to:

1. user able to click on the keyboard and to play sounds.

![half3](https://user-images.githubusercontent.com/68937006/122250528-bc54f500-ce97-11eb-86be-67580086724f.PNG)


2. user about to turn the sound on or off.

![halfsound](https://user-images.githubusercontent.com/68937006/122250809-fcb47300-ce97-11eb-8ef1-e8113eb8b453.PNG)


3. when the user clicks on the keyboard animation will show the key is been clicked.

![halfan](https://user-images.githubusercontent.com/68937006/122251093-35544c80-ce98-11eb-80fa-475fb5e3cf8c.PNG)


4. when the user clicks on the play button, will autoplay notes the user has clicked on, the animation will show which note is being played.

![half4](https://user-images.githubusercontent.com/68937006/122251180-47ce8600-ce98-11eb-958e-f3fe8fb43f87.PNG)


5. when the user clicks on the How to play button, will display a model that shows how to use Half Note. 

![half2](https://user-images.githubusercontent.com/68937006/122251205-4d2bd080-ce98-11eb-83ea-cd11c0b75659.PNG)


## 3.Architectre and Technologies

The project will use:

1. JavaScript
2. Html
3. Audio
4. CSS

## 4.Implementaion details
  ### keyboard 
   For the keyboard, I use HTML audio tag to play and store sounds 
   ``` 
   <div class="keyboard">
            <div class="keyboard1">
                <audio class="sound" src="./sounds/68437__pinkyfinger__piano-a.wav"></audio>
            </div>
            <div class="keyboard2">
                <audio class="sound" src="./sounds/68438__pinkyfinger__piano-b.wav"></audio>
            </div>
            <div class="keyboard3">
                <audio class="sound" src="./sounds/68439__pinkyfinger__piano-bb.wav"></audio>
            </div>
            <div class="keyboard4">
                <audio class="sound" src="./sounds/68440__pinkyfinger__piano-c.wav"></audio>
            </div>
            <div class="keyboard5">
                <audio class="sound" src="./sounds/68441__pinkyfinger__piano-c.wav"></audio>
            </div>
            <div class="keyboard6">
                <audio class="sound" src="./sounds/68442__pinkyfinger__piano-d.wav"></audio>
            </div>
            <div class="keyboard7">
                <audio class="sound" src="./sounds/68443__pinkyfinger__piano-e.wav"></audio>
            </div>
            <div class="keyboard8">
                <audio class="sound" src="./sounds/68444__pinkyfinger__piano-eb.wav"></audio>
            </div>
            <div class="keyboard9">
                <audio class="sound" src="./sounds/68445__pinkyfinger__piano-f.wav"></audio>
            </div>
            <div class="keyboard10">
                <audio class="sound" src="./sounds/68446__pinkyfinger__piano-f.wav"></audio>
            </div>
            <div class="keyboard11">
                <audio class="sound" src="./sounds/68447__pinkyfinger__piano-g.wav"></audio>
            </div>
            <div class="keyboard12">
                <audio class="sound" src="./sounds/68448__pinkyfinger__piano-g.wav"></audio>
            </div>
        </div>
   ```
    
  ### Animation
  Animation I use JavaScript and CSS to create the bubble moving effect
  ```
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
  ```

## 5.Bonus Features

add different instruments options
