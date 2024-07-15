var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var progressBarWidth = progressBar.clientWidth;
var lyricData = {
  err: 0,
  msg: "Success",
  data: {
    sentences: [
      {
        words: [
          { startTime: 9870, endTime: 10250, data: "Nếu" },
          { startTime: 10250, endTime: 10650, data: "ánh" },
          { startTime: 10650, endTime: 10650, data: "mắt" },
          { startTime: 10650, endTime: 11050, data: "nụ" },
          { startTime: 11050, endTime: 11450, data: "cười" },
        ],
      },
      {
        words: [
          { startTime: 11450, endTime: 11850, data: "Làm" },
          { startTime: 11850, endTime: 12260, data: "con" },
          { startTime: 12260, endTime: 12260, data: "tim" },
          { startTime: 12260, endTime: 12680, data: "ngất" },
          { startTime: 12680, endTime: 13480, data: "ngây" },
          { startTime: 13480, endTime: 13870, data: "bao" },
          { startTime: 13870, endTime: 16870, data: "ngày" },
        ],
      },
      {
        words: [
          { startTime: 16900, endTime: 17300, data: "Thì" },
          { startTime: 17300, endTime: 17700, data: "chắc" },
          { startTime: 17700, endTime: 18090, data: "sẽ" },
          { startTime: 18090, endTime: 18880, data: "chỉ" },
          { startTime: 18880, endTime: 19300, data: "là" },
          { startTime: 19300, endTime: 20880, data: "em" },
        ],
      },
      {
        words: [
          { startTime: 20880, endTime: 20880, data: "Nếu" },
          { startTime: 20880, endTime: 21270, data: "bóng" },
          { startTime: 21270, endTime: 21690, data: "dáng" },
          { startTime: 21690, endTime: 21690, data: "một" },
          { startTime: 21690, endTime: 22070, data: "người" },
        ],
      },
      {
        words: [
          { startTime: 22070, endTime: 22480, data: "Mà" },
          { startTime: 22480, endTime: 22880, data: "trong" },
          { startTime: 22880, endTime: 23270, data: "bao" },
          { startTime: 23270, endTime: 23270, data: "giấc" },
          { startTime: 23270, endTime: 24480, data: "mơ" },
          { startTime: 24480, endTime: 24870, data: "anh" },
          { startTime: 24870, endTime: 25270, data: "mong" },
          { startTime: 25270, endTime: 27650, data: "chờ" },
        ],
      },
      {
        words: [
          { startTime: 27650, endTime: 28070, data: "Ở" },
          { startTime: 28070, endTime: 28070, data: "bên" },
          { startTime: 28070, endTime: 28460, data: "sẻ" },
          { startTime: 28460, endTime: 28860, data: "chia" },
        ],
      },
      {
        words: [
          { startTime: 28860, endTime: 29260, data: "Và" },
          { startTime: 29260, endTime: 29660, data: "nghe" },
          { startTime: 29660, endTime: 30050, data: "lời" },
          { startTime: 30050, endTime: 30050, data: "anh" },
          { startTime: 30050, endTime: 31650, data: "nói" },
        ],
      },
      {
        words: [
          { startTime: 31650, endTime: 32440, data: "Về" },
          { startTime: 32440, endTime: 32840, data: "quá" },
          { startTime: 32840, endTime: 34020, data: "khứ," },
          { startTime: 34020, endTime: 34020, data: "hiện" },
          { startTime: 34020, endTime: 34820, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 34820, endTime: 35240, data: "Hay" },
          { startTime: 35240, endTime: 35630, data: "cả" },
          { startTime: 35630, endTime: 36030, data: "tương" },
          { startTime: 36030, endTime: 37620, data: "lai" },
        ],
      },
      {
        words: [
          { startTime: 37620, endTime: 38010, data: "Rồi" },
          { startTime: 38010, endTime: 38010, data: "anh" },
          { startTime: 38010, endTime: 39970, data: "sẽ" },
          { startTime: 39970, endTime: 40360, data: "cho" },
          { startTime: 40360, endTime: 42770, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 42770, endTime: 43170, data: "Anh" },
          { startTime: 43170, endTime: 43170, data: "sẽ" },
          { startTime: 43170, endTime: 43560, data: "cho" },
          { startTime: 43560, endTime: 44370, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 44370, endTime: 44370, data: "Một" },
          { startTime: 44370, endTime: 44790, data: "ngày" },
          { startTime: 44790, endTime: 45190, data: "thật" },
          { startTime: 45190, endTime: 45580, data: "dài" },
          { startTime: 45580, endTime: 45580, data: "được" },
          { startTime: 45580, endTime: 45980, data: "bên" },
          { startTime: 45980, endTime: 47560, data: "em" },
        ],
      },
      {
        words: [
          { startTime: 47560, endTime: 47960, data: "Lắng" },
          { startTime: 47960, endTime: 48370, data: "nghe" },
          { startTime: 48370, endTime: 48370, data: "những" },
          { startTime: 48370, endTime: 48770, data: "tâm" },
          { startTime: 48770, endTime: 49550, data: "tình" },
        ],
      },
      {
        words: [
          { startTime: 49550, endTime: 49550, data: "Bao" },
          { startTime: 49550, endTime: 49950, data: "nhiêu" },
          { startTime: 49950, endTime: 50350, data: "ngày" },
          { startTime: 50350, endTime: 50770, data: "qua" },
          { startTime: 50770, endTime: 51170, data: "còn" },
          { startTime: 51170, endTime: 51560, data: "giữ" },
          { startTime: 51560, endTime: 52750, data: "kín" },
        ],
      },
      {
        words: [
          { startTime: 52750, endTime: 53140, data: "Dù" },
          { startTime: 53140, endTime: 53140, data: "chỉ" },
          { startTime: 53140, endTime: 53540, data: "là" },
          { startTime: 53540, endTime: 53960, data: "lời" },
          { startTime: 53960, endTime: 54350, data: "nói" },
          { startTime: 54350, endTime: 54750, data: "thôi" },
        ],
      },
      {
        words: [
          { startTime: 54750, endTime: 55140, data: "Đôi" },
          { startTime: 55140, endTime: 55540, data: "khi" },
          { startTime: 55540, endTime: 55540, data: "lại" },
          { startTime: 55540, endTime: 55940, data: "mang" },
        ],
      },
      {
        words: [
          { startTime: 55940, endTime: 56330, data: "Theo" },
          { startTime: 56330, endTime: 56720, data: "bầu" },
          { startTime: 56720, endTime: 57140, data: "trời" },
          { startTime: 57140, endTime: 57540, data: "âu" },
          { startTime: 57540, endTime: 58330, data: "lo" },
        ],
      },
      {
        words: [
          { startTime: 58330, endTime: 58720, data: "Nên" },
          { startTime: 58720, endTime: 58720, data: "đừng" },
          { startTime: 58720, endTime: 59120, data: "lựa" },
          { startTime: 59120, endTime: 59520, data: "chọn" },
          { startTime: 59520, endTime: 59910, data: "đắn" },
          { startTime: 59910, endTime: 59910, data: "đo" },
        ],
      },
      {
        words: [
          { startTime: 59910, endTime: 60310, data: "Cứ" },
          { startTime: 60310, endTime: 60710, data: "nói" },
          { startTime: 60710, endTime: 61110, data: "ra" },
          { startTime: 61110, endTime: 61520, data: "hết" },
          { startTime: 61520, endTime: 61900, data: "với" },
          { startTime: 61900, endTime: 61900, data: "anh" },
          { startTime: 61900, endTime: 63500, data: "này" },
        ],
      },
      {
        words: [
          { startTime: 63500, endTime: 63900, data: "Dẫu" },
          { startTime: 63900, endTime: 64310, data: "mây" },
          { startTime: 64310, endTime: 64310, data: "vẫn" },
          { startTime: 64310, endTime: 64690, data: "trôi" },
          { startTime: 64690, endTime: 65500, data: "hoài" },
        ],
      },
      {
        words: [
          { startTime: 65500, endTime: 65900, data: "Đem" },
          { startTime: 65900, endTime: 65900, data: "theo" },
          { startTime: 65900, endTime: 66300, data: "sự" },
          { startTime: 66300, endTime: 66690, data: "miệt" },
          { startTime: 66690, endTime: 67090, data: "mài" },
          { startTime: 67090, endTime: 67480, data: "trong" },
          { startTime: 67480, endTime: 68290, data: "anh" },
        ],
      },
      {
        words: [
          { startTime: 68290, endTime: 68690, data: "Những" },
          { startTime: 68690, endTime: 69070, data: "năm" },
          { startTime: 69070, endTime: 69480, data: "tháng" },
          { startTime: 69480, endTime: 69880, data: "bên" },
          { startTime: 69880, endTime: 70690, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 70690, endTime: 71090, data: "Trôi" },
          { startTime: 71090, endTime: 71480, data: "qua" },
          { startTime: 71480, endTime: 71480, data: "thật" },
          { startTime: 71480, endTime: 72270, data: "nhanh" },
          { startTime: 72270, endTime: 72270, data: "chẳng" },
          { startTime: 72270, endTime: 72670, data: "đoán" },
          { startTime: 72670, endTime: 73860, data: "trước" },
        ],
      },
      {
        words: [
          { startTime: 73860, endTime: 74260, data: "Chỉ" },
          { startTime: 74260, endTime: 74650, data: "cần" },
          { startTime: 74650, endTime: 75070, data: "khi" },
          { startTime: 75070, endTime: 75070, data: "anh" },
          { startTime: 75070, endTime: 75470, data: "nắm" },
          { startTime: 75470, endTime: 76260, data: "tay" },
          { startTime: 76260, endTime: 76650, data: "em" },
        ],
      },
      {
        words: [
          { startTime: 76650, endTime: 77040, data: "Còn" },
          { startTime: 77040, endTime: 77460, data: "em" },
          { startTime: 77460, endTime: 77880, data: "giữ" },
          { startTime: 77880, endTime: 77880, data: "nụ" },
          { startTime: 77880, endTime: 78670, data: "cười" },
          { startTime: 78670, endTime: 78670, data: "ngây" },
          { startTime: 78670, endTime: 79460, data: "thơ" },
        ],
      },
      {
        words: [
          { startTime: 79460, endTime: 79860, data: "Thì" },
          { startTime: 79860, endTime: 80280, data: "chẳng" },
          { startTime: 80280, endTime: 80280, data: "còn" },
          { startTime: 80280, endTime: 81090, data: "gì" },
        ],
      },
      {
        words: [
          { startTime: 81090, endTime: 81090, data: "Quý" },
          { startTime: 81090, endTime: 81490, data: "giá" },
          { startTime: 81490, endTime: 81880, data: "hơn" },
          { startTime: 81880, endTime: 82280, data: "trong" },
          { startTime: 82280, endTime: 83090, data: "đời" },
        ],
      },
      {
        words: [
          { startTime: 83090, endTime: 83480, data: "Vì" },
          { startTime: 83480, endTime: 84270, data: "có" },
          { startTime: 84270, endTime: 84270, data: "em" },
          { startTime: 84270, endTime: 84670, data: "đây" },
          { startTime: 84670, endTime: 85460, data: "rồi," },
          { startTime: 85460, endTime: 85860, data: "em" },
          { startTime: 85860, endTime: 88860, data: "à" },
        ],
      },
      {
        words: [
          { startTime: 91990, endTime: 92260, data: "Từ" },
          { startTime: 92260, endTime: 92260, data: "khi" },
          { startTime: 92260, endTime: 92510, data: "hai" },
          { startTime: 92510, endTime: 92780, data: "ta" },
        ],
      },
      {
        words: [
          { startTime: 92780, endTime: 93050, data: "Đã" },
          { startTime: 93050, endTime: 93050, data: "về" },
          { startTime: 93050, endTime: 93310, data: "chung" },
          { startTime: 93310, endTime: 93590, data: "một" },
          { startTime: 93590, endTime: 94110, data: "nhà" },
        ],
      },
      {
        words: [
          { startTime: 94110, endTime: 94110, data: "Anh" },
          { startTime: 94110, endTime: 94370, data: "chẳng" },
          { startTime: 94370, endTime: 94370, data: "cho" },
          { startTime: 94370, endTime: 94640, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 94640, endTime: 94900, data: "Được" },
          { startTime: 94900, endTime: 94900, data: "nhiều" },
          { startTime: 94900, endTime: 95170, data: "thì" },
          { startTime: 95170, endTime: 95450, data: "giờ" },
        ],
      },
      {
        words: [
          { startTime: 95450, endTime: 95710, data: "Để" },
          { startTime: 95710, endTime: 95710, data: "nghe" },
          { startTime: 95710, endTime: 95970, data: "em" },
          { startTime: 95970, endTime: 96240, data: "kêu" },
          { startTime: 96240, endTime: 96760, data: "ca" },
        ],
      },
      {
        words: [
          { startTime: 96760, endTime: 96760, data: "Kể" },
          { startTime: 96760, endTime: 97030, data: "về" },
          { startTime: 97030, endTime: 97030, data: "vui" },
          { startTime: 97030, endTime: 97290, data: "buồn" },
          { startTime: 97290, endTime: 97570, data: "cuộc" },
          { startTime: 97570, endTime: 97840, data: "sống" },
        ],
      },
      {
        words: [
          { startTime: 97840, endTime: 98100, data: "Hay" },
          { startTime: 98100, endTime: 98100, data: "về" },
          { startTime: 98100, endTime: 98360, data: "cuộc" },
          { startTime: 98360, endTime: 98620, data: "đời" },
          { startTime: 98620, endTime: 98620, data: "đầy" },
          { startTime: 98620, endTime: 98880, data: "hối" },
          { startTime: 98880, endTime: 99420, data: "hả" },
        ],
      },
      {
        words: [
          { startTime: 99420, endTime: 99420, data: "Vậy" },
          { startTime: 99420, endTime: 99680, data: "thì" },
          { startTime: 99680, endTime: 99950, data: "hôm" },
          { startTime: 99950, endTime: 99950, data: "nay" },
          { startTime: 99950, endTime: 100220, data: "anh" },
          { startTime: 100220, endTime: 100490, data: "sẽ" },
          { startTime: 100490, endTime: 100490, data: "ngồi" },
          { startTime: 100490, endTime: 100750, data: "lại" },
        ],
      },
      {
        words: [
          { startTime: 100750, endTime: 101020, data: "Mặc" },
          { startTime: 101020, endTime: 101020, data: "kệ" },
          { startTime: 101020, endTime: 101280, data: "ngoài" },
          { startTime: 101280, endTime: 101540, data: "kia" },
          { startTime: 101540, endTime: 101540, data: "là" },
          { startTime: 101540, endTime: 101820, data: "vội" },
          { startTime: 101820, endTime: 102090, data: "vã" },
        ],
      },
      {
        words: [
          { startTime: 102090, endTime: 102350, data: "Nên" },
          { startTime: 102350, endTime: 102610, data: "là" },
          { startTime: 102610, endTime: 102880, data: "anh" },
          { startTime: 102880, endTime: 102880, data: "sẽ" },
          { startTime: 102880, endTime: 103140, data: "cho" },
          { startTime: 103140, endTime: 103400, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 103400, endTime: 103670, data: "Một" },
          { startTime: 103670, endTime: 103670, data: "khoảng" },
          { startTime: 103670, endTime: 103940, data: "trời" },
          { startTime: 103940, endTime: 104950, data: "riêng" },
        ],
      },
      {
        words: [
          { startTime: 104950, endTime: 104950, data: "Có" },
          { startTime: 104950, endTime: 105480, data: "em" },
          { startTime: 105480, endTime: 105480, data: "và" },
          { startTime: 105480, endTime: 106010, data: "anh" },
        ],
      },
      {
        words: [
          { startTime: 106010, endTime: 106280, data: "Trong" },
          { startTime: 106280, endTime: 106540, data: "đó" },
          { startTime: 106540, endTime: 106540, data: "cùng" },
          { startTime: 106540, endTime: 106810, data: "những" },
          { startTime: 106810, endTime: 107070, data: "câu" },
          { startTime: 107070, endTime: 107340, data: "chuyện" },
        ],
      },
      {
        words: [
          { startTime: 107340, endTime: 107600, data: "Chuyện" },
          { startTime: 107600, endTime: 107870, data: "vui," },
          { startTime: 107870, endTime: 108130, data: "chuyện" },
          { startTime: 108130, endTime: 108410, data: "buồn," },
          { startTime: 108410, endTime: 108410, data: "chuyện" },
          { startTime: 108410, endTime: 108670, data: "quá" },
          { startTime: 108670, endTime: 108930, data: "khứ" },
        ],
      },
      {
        words: [
          { startTime: 108930, endTime: 108930, data: "Hay" },
          { startTime: 108930, endTime: 109190, data: "là" },
          { startTime: 109190, endTime: 109460, data: "chuyện" },
          { startTime: 109460, endTime: 109460, data: "tương" },
          { startTime: 109460, endTime: 109990, data: "lai" },
        ],
      },
      {
        words: [
          { startTime: 109990, endTime: 110260, data: "Để" },
          { startTime: 110260, endTime: 110260, data: "nghe" },
          { startTime: 110260, endTime: 110520, data: "để" },
          { startTime: 110520, endTime: 110520, data: "hiểu" },
          { startTime: 110520, endTime: 110790, data: "để" },
          { startTime: 110790, endTime: 111060, data: "suy" },
          { startTime: 111060, endTime: 111320, data: "nghĩ" },
        ],
      },
      {
        words: [
          { startTime: 111320, endTime: 111320, data: "Để" },
          { startTime: 111320, endTime: 111590, data: "không" },
          { startTime: 111590, endTime: 111590, data: "quên" },
          { startTime: 111590, endTime: 111850, data: "đi" },
          { startTime: 111850, endTime: 112110, data: "thực" },
          { startTime: 112110, endTime: 113610, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 113610, endTime: 113610, data: "Là" },
          { startTime: 113610, endTime: 114010, data: "có" },
          { startTime: 114010, endTime: 114010, data: "em" },
          { startTime: 114010, endTime: 114410, data: "luôn" },
          { startTime: 114410, endTime: 114800, data: "ở" },
          { startTime: 114800, endTime: 114800, data: "đây" },
          { startTime: 114800, endTime: 115200, data: "bên" },
          { startTime: 115200, endTime: 115600, data: "anh" },
        ],
      },
      {
        words: [
          { startTime: 115600, endTime: 115600, data: "Lắng" },
          { startTime: 115600, endTime: 116010, data: "lo" },
          { startTime: 116010, endTime: 116410, data: "và" },
          { startTime: 116410, endTime: 116800, data: "yêu" },
          { startTime: 116800, endTime: 117200, data: "anh" },
          { startTime: 117200, endTime: 117590, data: "chân" },
          { startTime: 117590, endTime: 118400, data: "thành" },
        ],
      },
      {
        words: [
          { startTime: 118400, endTime: 118790, data: "Dẫu" },
          { startTime: 118790, endTime: 119190, data: "cho" },
          { startTime: 119190, endTime: 119600, data: "anh" },
          { startTime: 119600, endTime: 119600, data: "chẳng" },
          { startTime: 119600, endTime: 119990, data: "có" },
          { startTime: 119990, endTime: 120390, data: "đồng" },
          { startTime: 120390, endTime: 120800, data: "nào" },
        ],
      },
      {
        words: [
          { startTime: 120800, endTime: 121070, data: "Thì" },
          { startTime: 121070, endTime: 121070, data: "mặc" },
          { startTime: 121070, endTime: 121330, data: "kệ" },
          { startTime: 121330, endTime: 121330, data: "đi" },
        ],
      },
      {
        words: [
          { startTime: 121330, endTime: 121600, data: "Đời" },
          { startTime: 121600, endTime: 121880, data: "có" },
          { startTime: 121880, endTime: 121880, data: "lúc" },
          { startTime: 121880, endTime: 122140, data: "xuống" },
          { startTime: 122140, endTime: 122140, data: "rồi" },
          { startTime: 122140, endTime: 122410, data: "lại" },
          { startTime: 122410, endTime: 122660, data: "lên" },
        ],
      },
      {
        words: [
          { startTime: 122660, endTime: 122660, data: "Anh" },
          { startTime: 122660, endTime: 122930, data: "à," },
          { startTime: 122930, endTime: 123200, data: "không" },
          { startTime: 123200, endTime: 124790, data: "sao" },
        ],
      },
      {
        words: [
          { startTime: 124790, endTime: 125050, data: "Cuộc" },
          { startTime: 125050, endTime: 125050, data: "sống" },
          { startTime: 125050, endTime: 125320, data: "luôn" },
          { startTime: 125320, endTime: 125590, data: "luôn" },
        ],
      },
      {
        words: [
          { startTime: 125590, endTime: 125590, data: "Có" },
          { startTime: 125590, endTime: 125860, data: "những" },
          { startTime: 125860, endTime: 125860, data: "lúc" },
          { startTime: 125860, endTime: 126120, data: "chậm" },
          { startTime: 126120, endTime: 127410, data: "lại" },
        ],
      },
      {
        words: [
          { startTime: 127410, endTime: 127410, data: "Mình" },
          { startTime: 127410, endTime: 127670, data: "sẻ" },
          { startTime: 127670, endTime: 127940, data: "chia" },
          { startTime: 127940, endTime: 128190, data: "ta" },
          { startTime: 128190, endTime: 128460, data: "hướng" },
          { startTime: 128460, endTime: 128460, data: "đến" },
          { startTime: 128460, endTime: 128720, data: "tương" },
          { startTime: 128720, endTime: 129800, data: "lai" },
        ],
      },
      {
        words: [
          { startTime: 129800, endTime: 130060, data: "Chẳng" },
          { startTime: 130060, endTime: 130330, data: "cần" },
          { startTime: 130330, endTime: 130330, data: "phải" },
          { startTime: 130330, endTime: 130590, data: "có" },
          { startTime: 130590, endTime: 130850, data: "hợp" },
          { startTime: 130850, endTime: 130850, data: "đồng" },
          { startTime: 130850, endTime: 131120, data: "tỷ" },
          { startTime: 131120, endTime: 131380, data: "năm" },
        ],
      },
      {
        words: [
          { startTime: 131380, endTime: 131650, data: "Anh" },
          { startTime: 131650, endTime: 131920, data: "chỉ" },
          { startTime: 131920, endTime: 131920, data: "muốn" },
          { startTime: 131920, endTime: 132190, data: "có" },
          { startTime: 132190, endTime: 132450, data: "được" },
          { startTime: 132450, endTime: 132450, data: "với" },
          { startTime: 132450, endTime: 132720, data: "em" },
        ],
      },
      {
        words: [
          { startTime: 132720, endTime: 132980, data: "Là" },
          { startTime: 132980, endTime: 133250, data: "hợp" },
          { startTime: 133250, endTime: 133510, data: "đồng" },
          { startTime: 133510, endTime: 133770, data: "trọn" },
          { startTime: 133770, endTime: 133770, data: "đời" },
        ],
      },
      {
        words: [
          { startTime: 133250, endTime: 133650, data: "Anh" },
          { startTime: 133650, endTime: 133650, data: "sẽ" },
          { startTime: 133650, endTime: 134050, data: "cho" },
          { startTime: 134050, endTime: 134850, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 134850, endTime: 134850, data: "Một" },
          { startTime: 134850, endTime: 135250, data: "ngày" },
          { startTime: 135250, endTime: 135640, data: "thật" },
          { startTime: 135640, endTime: 136040, data: "dài" },
          { startTime: 136040, endTime: 136440, data: "được" },
          { startTime: 136440, endTime: 136440, data: "bên" },
          { startTime: 136440, endTime: 138050, data: "em" },
        ],
      },
      {
        words: [
          { startTime: 138050, endTime: 138450, data: "Lắng" },
          { startTime: 138450, endTime: 138830, data: "nghe" },
          { startTime: 138830, endTime: 138830, data: "những" },
          { startTime: 138830, endTime: 139230, data: "tâm" },
          { startTime: 139230, endTime: 140020, data: "tình" },
        ],
      },
      {
        words: [
          { startTime: 140020, endTime: 140420, data: "Bao" },
          { startTime: 140420, endTime: 140420, data: "nhiêu" },
          { startTime: 140420, endTime: 140820, data: "ngày" },
          { startTime: 140820, endTime: 141230, data: "qua" },
          { startTime: 141230, endTime: 141620, data: "còn" },
          { startTime: 141620, endTime: 142020, data: "giữ" },
          { startTime: 142020, endTime: 143250, data: "kín" },
        ],
      },
      {
        words: [
          { startTime: 143250, endTime: 143630, data: "Dù" },
          { startTime: 143630, endTime: 144040, data: "chỉ" },
          { startTime: 144040, endTime: 144430, data: "là" },
          { startTime: 144430, endTime: 144430, data: "lời" },
          { startTime: 144430, endTime: 144820, data: "nói" },
          { startTime: 144820, endTime: 145240, data: "thôi" },
        ],
      },
      {
        words: [
          { startTime: 145240, endTime: 145640, data: "Đôi" },
          { startTime: 145640, endTime: 146030, data: "khi" },
          { startTime: 146030, endTime: 146030, data: "lại" },
          { startTime: 146030, endTime: 146430, data: "mang" },
        ],
      },
      {
        words: [
          { startTime: 146430, endTime: 146820, data: "Theo" },
          { startTime: 146820, endTime: 147220, data: "bầu" },
          { startTime: 147220, endTime: 147620, data: "trời" },
          { startTime: 147620, endTime: 148010, data: "âu" },
          { startTime: 148010, endTime: 148830, data: "lo" },
        ],
      },
      {
        words: [
          { startTime: 148830, endTime: 149220, data: "Nên" },
          { startTime: 149220, endTime: 149220, data: "đừng" },
          { startTime: 149220, endTime: 149610, data: "lựa" },
          { startTime: 149610, endTime: 150010, data: "chọn" },
          { startTime: 150010, endTime: 150400, data: "đắn" },
          { startTime: 150400, endTime: 150820, data: "đo" },
        ],
      },
      {
        words: [
          { startTime: 150820, endTime: 150820, data: "Cứ" },
          { startTime: 150820, endTime: 151220, data: "nói" },
          { startTime: 151220, endTime: 151610, data: "ra" },
          { startTime: 151610, endTime: 152010, data: "hết" },
          { startTime: 152010, endTime: 152410, data: "với" },
          { startTime: 152410, endTime: 152810, data: "anh" },
          { startTime: 152810, endTime: 153990, data: "này" },
        ],
      },
      {
        words: [
          { startTime: 153990, endTime: 154390, data: "Dẫu" },
          { startTime: 154390, endTime: 154390, data: "mây" },
          { startTime: 154390, endTime: 154790, data: "vẫn" },
          { startTime: 154790, endTime: 155200, data: "trôi" },
          { startTime: 155200, endTime: 155990, data: "hoài" },
        ],
      },
      {
        words: [
          { startTime: 155990, endTime: 156380, data: "Đem" },
          { startTime: 156380, endTime: 156380, data: "theo" },
          { startTime: 156380, endTime: 156780, data: "sự" },
          { startTime: 156780, endTime: 157190, data: "miệt" },
          { startTime: 157190, endTime: 157590, data: "mài" },
          { startTime: 157590, endTime: 157980, data: "trong" },
          { startTime: 157980, endTime: 159180, data: "anh" },
        ],
      },
      {
        words: [
          { startTime: 159180, endTime: 159570, data: "Những" },
          { startTime: 159570, endTime: 159970, data: "năm" },
          { startTime: 159970, endTime: 159970, data: "tháng" },
          { startTime: 159970, endTime: 160380, data: "bên" },
          { startTime: 160380, endTime: 161160, data: "mình" },
        ],
      },
      {
        words: [
          { startTime: 161160, endTime: 161580, data: "Trôi" },
          { startTime: 161580, endTime: 161960, data: "qua" },
          { startTime: 161960, endTime: 162370, data: "thật" },
          { startTime: 162370, endTime: 162770, data: "nhanh" },
          { startTime: 162770, endTime: 163160, data: "chẳng" },
          { startTime: 163160, endTime: 163160, data: "đoán" },
          { startTime: 163160, endTime: 164370, data: "trước" },
        ],
      },
      {
        words: [
          { startTime: 164370, endTime: 164770, data: "Chỉ" },
          { startTime: 164770, endTime: 165160, data: "cần" },
          { startTime: 165160, endTime: 165560, data: "khi" },
          { startTime: 165560, endTime: 165950, data: "anh" },
          { startTime: 165950, endTime: 166350, data: "nắm" },
          { startTime: 166350, endTime: 166740, data: "tay" },
          { startTime: 166740, endTime: 167140, data: "em" },
        ],
      },
      {
        words: [
          { startTime: 167140, endTime: 167540, data: "Còn" },
          { startTime: 167540, endTime: 167940, data: "em" },
          { startTime: 167940, endTime: 168340, data: "giữ" },
          { startTime: 168340, endTime: 168730, data: "nụ" },
          { startTime: 168730, endTime: 169130, data: "cười" },
          { startTime: 169130, endTime: 169550, data: "ngây" },
          { startTime: 169550, endTime: 169940, data: "thơ" },
        ],
      },
      {
        words: [
          { startTime: 169940, endTime: 170340, data: "Thì" },
          { startTime: 170340, endTime: 170730, data: "chẳng" },
          { startTime: 170730, endTime: 171130, data: "còn" },
          { startTime: 171130, endTime: 171520, data: "gì" },
        ],
      },
      {
        words: [
          { startTime: 171520, endTime: 171920, data: "Quý" },
          { startTime: 171920, endTime: 171920, data: "giá" },
          { startTime: 171920, endTime: 172340, data: "hơn" },
          { startTime: 172340, endTime: 172730, data: "trong" },
          { startTime: 172730, endTime: 173920, data: "đời" },
        ],
      },
      {
        words: [
          { startTime: 173920, endTime: 174320, data: "Vì" },
          { startTime: 174320, endTime: 174320, data: "có" },
          { startTime: 174320, endTime: 174720, data: "em" },
          { startTime: 174720, endTime: 175110, data: "đây" },
          { startTime: 175110, endTime: 176320, data: "rồi," },
          { startTime: 176320, endTime: 176710, data: "em" },
          { startTime: 176710, endTime: 179100, data: "à" },
        ],
      },
      {
        words: [
          { startTime: 179100, endTime: 179490, data: "Em" },
          { startTime: 179490, endTime: 181500, data: "à" },
          { startTime: 181500, endTime: 181900, data: "em" },
          { startTime: 181900, endTime: 182900, data: "à" },
        ],
      },
    ],
    file: "https://static-zmp3.zmdcdn.me/lyrics/e/3/f/a/e3facacbda72104ac55f0188f917febb.lrc",
    enabledVideoBG: true,
    streamingUrl:
      "https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/U-vsH4S62tY/8a36dfd802e2edbcb4f3/4545bbd812dcfd82a4cd/1080/Anh-Se-Cho-Minh.mp4?authen=exp=1721111240~acl=/U-vsH4S62tY/*~hmac=38755810f704b3db67c1d9c9f8979194",
    defaultIBGUrls: [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg",
    ],
    BGMode: 0,
  },
  timestamp: 1720940433923,
};
var lyric = lyricData.data.sentences;
var offsetX = 0;
var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
var isDragging = false;

// Sự kiện khi nhấn chuột xuống progressBar
progressBar.addEventListener("mousedown", function (e) {
  if (e.which !== 1) return;
  offsetX = e.offsetX;
  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = rate + "%";
  initialClientX = e.clientX;
  moveSpace = offsetX;
  lastMoveSpace = offsetX;
  isDragging = true;
  document.addEventListener("mousemove", handleDrag);
});
// Sự kiện khi nhấn chuột xuống progressSpan
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  initialClientX = e.clientX;
  lastMoveSpace = (audio.currentTime / audio.duration) * progressBarWidth;
  isDragging = true;
  document.addEventListener("mousemove", handleDrag);
});
// Sự kiện khi di chuyển chuột trên thanh progressBar
progressBar.addEventListener("mousemove", function (e) {
  var mouseOffsetX = e.offsetX;
  var rate = (mouseOffsetX / progressBarWidth) * 100;
  var timerSpan = (rate / 100) * audio.duration;
  timer.style.left = mouseOffsetX + "px";
  if (isDragging) {
    timer.innerText = "";
    timer.style.padding = "0";
    return;
  }
  timer.style.padding = "2px 3px";
  timer.innerText = getTimeFormat(timerSpan);
});
// Sự kiện khi di chuột trên progressSpan
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
// Sự kiện khi thả chuột
document.addEventListener("mouseup", function () {
  lastMoveSpace = moveSpace;
  document.removeEventListener("mousemove", handleDrag);
  if (isDragging) {
    var rate = (moveSpace / progressBarWidth) * 100;
    audio.currentTime = (audio.duration * rate) / 100;
  }
  isDragging = false;
});
// Hàm xử lý khi kéo chuột
function handleDrag(e) {
  moveSpace = e.clientX - initialClientX + lastMoveSpace;
  var rate = (moveSpace / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
}
// Xử lý audio
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");
var timer = progressBar.querySelector(".timer");
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
window.addEventListener("load", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});
playActionEl.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", function () {
  playActionEl.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  playActionEl.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("ended", function () {
  playActionEl.classList.replace("fa-pause", "fa-play");
  currentTimeEl.innerText = getTimeFormat(0);
  progress.style.width = "0%";
});
audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  currentTimeEl.innerText = getTimeFormat(currentTime);
  if (!isDragging) {
    var rate = (currentTime / audio.duration) * 100;
    progress.style.width = rate + "%";
  }
  handleKaraoke(currentTime);
});

// Xây dựng tính năng karaoke
var karaoke = document.querySelector(".karaoke");
var karaokePlayBtn = document.querySelector(".play");
var karaokeWrap = karaoke.querySelector(".karaoke-wrap");
var karaokeCloseBtn = karaokeWrap.querySelector(".close");
var karaokeContent = karaokeWrap.querySelector(".karaoke-content");
var songInfo = `
<p>Anh sẽ cho mình</p>
<p>Ca sĩ: Khải ft Sơn Bùi</p>
`;
karaokePlayBtn.addEventListener("click", function () {
  karaokeWrap.classList.add("show");
  karaokeContent.innerHTML = songInfo;
});

karaokeCloseBtn.addEventListener("click", function () {
  karaokeWrap.classList.remove("show");
  karaokeContent.innerHTML = "";
});

var number = 2; // Số dòng hiển thị trên một trang

// Chia lyric thành các trang
function paginateLyrics(lyrics, number) {
  var pages = [];
  for (var i = 0; i < lyrics.length; i += number) {
    pages.push(lyrics.slice(i, i + number));
  }
  return pages;
}

var paginatedLyrics = paginateLyrics(lyric, number);

// Hàm handleKaraoke
function handleKaraoke(currentTime) {
  var index = lyric.findIndex(function (sentence) {
    var wordArray = sentence.words;
    var startTime = wordArray[0].startTime / 1000;
    var endTime = wordArray[wordArray.length - 1].endTime / 1000;
    return currentTime >= startTime && currentTime <= endTime;
  });

  if (index !== -1) {
    karaokeContent.innerText = "";
    var pageIndex = Math.floor(index / number);
    var pageContent = paginatedLyrics[pageIndex];

    var div = document.createElement("div");
    pageContent.forEach(function (sentence) {
      var p = document.createElement("p");
      sentence.words.forEach(function (word) {
        var wordEl = document.createElement("span");
        wordEl.classList.add("word");
        wordEl.innerText = word.data + " ";
        p.append(wordEl);
      });
      div.append(p);
    });
    karaokeContent.append(div);
  } else {
    karaokeContent.innerHTML = songInfo;
  }
}
