const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "F8_PLAYER";
const heading = $("header h2");
const cd = $(".cd");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const currentTimer = $(".timer-left");
const durationTimer = $(".timer-right");
const timerHover = $(".timer-hover");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isDragging: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  getTimeFormat: function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  },
  songs: [
    {
      name: "Anh sẽ cho mình",
      singer: "Khải ft Sơn Bùi",
      path: "https://a01.nct.vn/NhacCuaTui2045/AnhSeChoMinh-KhaiSonBui-11722978.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2023/09/18/7/2/8/d/1695032666053_500.jpg",
    },
    {
      name: "Không thể say",
      singer: "HIEUTHUHAI",
      path: "https://x01.nct.vn/NhacCuaTui2038/KhongTheSay-HIEUTHUHAI-9293024.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2023/04/19/d/2/5/3/1681879735020_500.jpg",
    },
    {
      name: "Ngày Đẹp Trời Để Nói Chia Tay",
      singer: "Lou Hoàng",
      path: "https://a01.nct.vn/Warner_Audio241/NgayDepTroiDeNoiChiaTay-LouHoang-15018459.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2024/06/10/0/1/c/c/1718028171784_500.jpg",
    },
    {
      name: "Đừng Làm Trái Tim Anh Đau",
      singer: "Huy Vạc",
      path: "https://x01.nct.vn/NhacCuaTui2056/DungLamTraiTimAnhDauCover-HuyVac-15072138.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2024/06/17/5/a/6/1/1718594771037_500.jpg",
    },
    {
      name: "Rồi Em Sẽ Gặp Một Chàng Trai Khác",
      singer: "The Masked Singer, Hippohappy",
      path: "https://a01.nct.vn/Warner_Audio197/RoiEmSeGapMotChangTraiKhacFeatHippohappy-TheMaskedSinger-12419077.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2023/11/15/d/6/1/0/1700018872628_500.jpg",
    },
    {
      name: "Ngày Mai Người Ta Lấy Chồng",
      singer: "The Masked Singer, Voi Bản Đôn",
      path: "https://x01.nct.vn/Warner_Audio172/NgayMaiNguoiTaLayChongFeatVoiBanDon-TheMaskedSinger-10756917.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2023/11/15/d/6/1/0/1700018872628_500.jpg",
    },
  ],
  render: function () {
    const _this = this;
    const htmls = this.songs.map(function (song, index) {
      const isActive = index === _this.currentIndex ? "active" : "";
      return `
         <div class="song ${isActive}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">
                        ${song.singer}
                    </p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý khi làm mới song
    audio.onloadedmetadata = function () {
      currentTimer.innerText = _this.getTimeFormat(0);
      durationTimer.innerText = _this.getTimeFormat(audio.duration);
    };
    // Xử lý CD quay/ dừng
    const cdThumbAnimate = cdThumb.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 10000, // 10 seconds
        iterations: Infinity,
      }
    );
    cdThumbAnimate.pause();
    // Xử lý phóng to/ thu nhỏ CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    // Xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    // Khi song được play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    // Khi song bị pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    // Khi tiến độ song thay đổi
    audio.ontimeupdate = function () {
      if (!_this.isDragging && audio.duration) {
        const percentValue = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = percentValue;
        currentTimer.innerText = _this.getTimeFormat(audio.currentTime);
      }
    };
    // Xử lý khi tua song
    progress.onchange = function () {
      if (audio.duration) {
        const seekTime = (this.value / 100) * audio.duration;
        audio.currentTime = seekTime;
        audio.play();
      }
    };
    // Trạng thái của isDragging khi nhấn chuột xuống
    progress.onmousedown = function () {
      _this.isDragging = true;
    };
    // Trạng thái của isDragging khi nhấn chuột lên
    progress.onmouseup = function () {
      _this.isDragging = false;
    };
    // Xử lý hiển thị timer khi hover vào progress
    progress.onmousemove = function (e) {
      e.stopPropagation();
      let offsetX = e.offsetX;
      // console.log(e.offsetX, progress.offsetWidth);
      if (offsetX > 0 && offsetX < progress.offsetWidth) {
        const percentValue = (offsetX / progress.offsetWidth) * 100;
        const currentTime = (percentValue / 100) * audio.duration;
        timerHover.textContent = _this.getTimeFormat(currentTime);
        timerHover.style.left = percentValue + "%";
      }
    };
    // Xử lý khi next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    // Xử lý khi prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
    };
    // Xử lý bật/ tắt random
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      this.classList.toggle("active", _this.isRandom);
      _this.setConfig("isRandom", _this.isRandom);
    };
    // Xử lý bật/ tắt repeat
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      this.classList.toggle("active", _this.isRepeat);
      _this.setConfig("isRepeat", _this.isRepeat);
    };
    // Xử lý next song khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
    // Lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      console.log(songNode);
      // Xử lý khi click vào song
      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        if (songNode) {
          _this.currentIndex = +songNode.dataset.index;
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
        // Xử lý khi click vào song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(function () {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
    // console.log(heading, cdThumb, audio);
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;

    // Object.assign(this, this.config);
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng app
    this.loadConfig();

    // Định nghĩa các thuộc tính cho Object
    this.defineProperties();

    // Lắng nghe và xử lý các sự kiện (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    // Render Playlist
    this.render();

    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  },
};
app.start();
