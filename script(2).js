const searchButton =
  document.querySelector("#search-button");

const quizButton =
  document.querySelector("#quiz-button");

const searchScreen =
  document.querySelector("#search-screen");

const quizScreen =
  document.querySelector("#quiz-screen");

const categoryItems = document.querySelectorAll(".category-item");

const modeSwitch =
  document.querySelector("#sign-page .mode-switch");

const signIncompleteScreen = document.querySelector("#sign-incomplete-screen");

const signButton =
  document.querySelector("#sign-button");

const fingerButton =
  document.querySelector("#finger-button");

const signPage =
  document.querySelector("#sign-page");

const fingerPage =
  document.querySelector("#finger-page");

const fingerSearchButton =
  document.querySelector("#finger-search-button");

const fingerQuizButton =
  document.querySelector("#finger-quiz-button");

const fingerSearchScreen =
  document.querySelector("#finger-search-screen");

const fingerQuizScreen =
  document.querySelector("#finger-quiz-screen");  

const fingerCategoryItems =
  document.querySelectorAll(".finger-category-item");

const fingerModeSwitch =
  document.querySelector(
    "#finger-page .mode-switch"
  );

const videoModal =
  document.querySelector("#video-modal");

const modalYoutube =
  document.querySelector("#modal-youtube");

const modalTitle =
  document.querySelector("#modal-title");

const modalClose =
  document.querySelector("#video-modal-close");

const signSearchInput =
  document.querySelector("#sign-search-input");

const signSearchButton =
  document.querySelector("#sign-search-button");

const itemContents =
  document.querySelector("#sign-page .item-contents");

const searchArea =
  document.querySelector("#sign-page .search-area");

const quizAnswerArea =
  document.querySelector("#quiz-answer-area");

const quizAnswerInput =
  document.querySelector("#quiz-answer-input");

const quizAnswerButton =
  document.querySelector("#quiz-answer-button");

const quizAnswerTitle =
  document.querySelector("#quiz-answer-title");

const quizAfterButtons =
  document.querySelector("#quiz-after-buttons");

const nextQuizButton =
  document.querySelector("#next-quiz-button");

const viewResultsButton =
  document.querySelector("#view-results-button");

const imageModal =
  document.querySelector("#image-modal");

const modalImage =
  document.querySelector("#modal-image");

const imageModalTitle =
  document.querySelector("#image-modal-title");

const imageModalClose =
  document.querySelector("#image-modal-close");

const fingerItemSearchArea =
  document.querySelector(
    ".finger-item-search-area"
  );

const fingerItemSearchInput =
  document.querySelector(
    "#finger-item-search-input"
  );

const fingerItemSearchButton =
  document.querySelector(
    "#finger-item-search-button"
  );

//説明文を変更
const fingerSubtitle =
  document.querySelector("#finger-subtitle");

let currentSignCategoryKey =
"robocon";


// =========================
// 最初のカテゴリー案内画面
// =========================

const signCategoryGuide =
  document.querySelector(
    "#sign-category-guide"
  );

const fingerCategoryGuide =
  document.querySelector(
    "#finger-category-guide"
  );

// =========================
// 最初は案内画面だけ表示
// =========================

// しゅわ
signCategoryGuide.style.display =
  "block";

searchScreen.style.display =
  "none";

quizScreen.style.display =
  "none";

modeSwitch.style.display =
  "none";



// ゆびもじ

// 案内画面を表示
fingerCategoryGuide.style.display =
  "block";

// 学習画面を非表示
fingerSearchScreen.style.display = "none";

// クイズ画面を非表示
fingerQuizScreen.style.display = "none";

// しらべる・クイズのボタンを非表示
fingerModeSwitch.style.display = "none";

  





/* =========================
   クイズ回答後の正誤画像表示
   しゅわ・ゆびもじ共通
========================= */

function showQuizAnswerWithImage(answerElement, title, isCorrect) {

  // 以前の表示内容を削除
  answerElement.replaceChildren();

  // 正解・不正解に応じた画像を作成
  const resultImage = document.createElement("img");

  resultImage.src = isCorrect
    ? "images/正解.png"
    : "images/不正解.png";

  resultImage.alt = isCorrect ? "正解" : "不正解";
  resultImage.className = "quiz-result-mark";

  // 正しい答えの文字
  const answerText = document.createElement("span");
  answerText.textContent = title;

  // 画像と文字を並べる
  answerElement.appendChild(resultImage);
  answerElement.appendChild(answerText);

  // 表示
  answerElement.style.display = "flex";
}













searchButton.addEventListener("click", function() {

  // ボタンの色を変更
  searchButton.classList.add("active");
  quizButton.classList.remove("active");

  // 画面を変更
  searchScreen.style.display = "block";
  quizScreen.style.display = "none";

  // 検索欄を表示
  searchArea.style.display = "block";

});



quizButton.addEventListener("click", function() {

  // ボタンの色を変更
  quizButton.classList.add("active");
  searchButton.classList.remove("active");

  // 画面を変更
  quizScreen.style.display = "block";
  searchScreen.style.display = "none";

  // 検索欄を非表示
  searchArea.style.display = "none";

  // クイズを開始
  startQuiz();

});




//=========================
//   しゅわ／ゆびもじ切り替え
//=========================
signButton.addEventListener("click", function() {
  signIncompleteScreen.hidden = true;
  modeSwitch.classList.remove("show-incomplete");

  signCategoryGuide.style.display =
  "block";

modeSwitch.style.display =
  "none";

searchScreen.style.display =
  "none";

quizScreen.style.display =
  "none";

categoryItems.forEach(function(item) {
  item.classList.remove("active");
});

  // ボタン
  signButton.classList.add("active");
  fingerButton.classList.remove("active");

  // ページ
  signPage.style.display = "block";
  fingerPage.style.display = "none";

});


fingerButton.addEventListener("click", function() {

  fingerSearchScreen.style.display = "none";

  fingerCategoryGuide.style.display =
  "block";

fingerModeSwitch.style.display =
  "none";

fingerQuizScreen.style.display =
  "none";

fingerCategoryItems.forEach(function(item) {
  item.classList.remove("active");
});

  // ボタン
  fingerButton.classList.add("active");
  signButton.classList.remove("active");

  // ページ
  fingerPage.style.display = "block";
  signPage.style.display = "none";

});






//=========================
//   手話側の「一覧を表示する関数」
//=========================
function showCategory(categoryKey) {

  // 指定されたカテゴリーのデータを取得
  const items =
    categoryData[categoryKey];


  // 今まで表示されていたものを消す
  itemContents.innerHTML = "";


  // itemを1個ずつ作る
  items.forEach(function(data) {

    const itemElement =
      document.createElement("div");

    itemElement.classList.add("item");


    itemElement.innerHTML = `
      <div
        class="youtube-box"
        data-video-id="${data.videoId}"
        data-title="${data.title}">

        <img
          src="${data.image}"
          alt="${data.title}の動画を見る"
          class="video-thumbnail">

      </div>

      <p class="item-title">
        ${data.title}
      </p>
    `;


    itemContents.appendChild(itemElement);

  });

}




//=========================
//   手話側の「右側カテゴリー」
//   手話リスト
//=========================

const categoryData = {

//ロボコンでよく使う手話　10個
  robocon: [
    {
      videoId: "ymiuHSRQ3qw",
      title: "おはよう",
      image: "images/item-contents/robocon/おはよう.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "こんにちは",
      image: "images/item-contents/robocon/こんにちは.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "こんばんは",
      image: "images/item-contents/robocon/こんばんは.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "ありがとう",
      image: "images/item-contents/robocon/ありがとう.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "おわる（おわった）",
      image: "images/item-contents/robocon/おわる.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "まだ",
      image: "images/item-contents/robocon/まだ.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "できる（だいじょうぶ）",
      image: "images/item-contents/robocon/できる.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "トイレ",
      image: "images/item-contents/robocon/トイレ.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "なに？どうした？",
      image: "images/item-contents/robocon/なに、どうした.jpg"
    },
    {
      videoId: "ymiuHSRQ3qw",
      title: "しゅくだい",
      image: "images/item-contents/robocon/宿題.jpg"
    }
  ],

//あいさつ　１４個
  greetings: [
    {
      videoId: "挨拶動画ID1",
      title: "おはよう",
      image: "images/item-contents/greetings/おはよう.jpg"
    },
    {
      videoId: "挨拶動画ID2",
      title: "こんにちは",
      image: "images/item-contents/greetings/こんにちは.jpg"
    },
    {
      videoId: "挨拶動画ID3",
      title: "こんばんは",
      image: "images/item-contents/greetings/こんばんは.jpg"
    },
    {
      videoId: "挨拶動画ID1",
      title: "ありがとう",
      image: "images/item-contents/greetings/ありがとう.jpg"
    },
    {
      videoId: "挨拶動画ID2",
      title: "ごめんなさい",
      image: "images/item-contents/greetings/ごめんなさい.jpg"
    },
    {
      videoId: "挨拶動画ID3",
      title: "ひさしぶり",
      image: "images/item-contents/greetings/ひさしぶり.jpg"
    },
    {
      videoId: "挨拶動画ID1",
      title: "おつかれさま",
      image: "images/item-contents/greetings/おつかれさま.jpg"
    },
    {
      videoId: "挨拶動画ID2",
      title: "げんき？",
      image: "images/item-contents/greetings/げんき.jpg"
    },
    {
      videoId: "挨拶動画ID3",
      title: "よろしくおねがいします",
      image: "images/item-contents/greetings/よろしくおねがいします.jpg"
    },
    {
      videoId: "挨拶動画ID1",
      title: "さようなら",
      image: "images/item-contents/greetings/さようなら.jpg"
    },
    {
      videoId: "挨拶動画ID2",
      title: "またね",
      image: "images/item-contents/greetings/またね.jpg"
    },
    {
      videoId: "挨拶動画ID3",
      title: "きをつけて",
      image: "images/item-contents/greetings/きをつけて.jpg"
    },
    {
      videoId: "挨拶動画ID2",
      title: "おやすみなさい",
      image: "images/item-contents/greetings/おやすみなさい.jpg"
    },
    {
      videoId: "挨拶動画ID3",
      title: "またあいましょう",
      image: "images/item-contents/greetings/またあいましょう.jpg"
    }
  ],

//がっこう　２４個
  school: [
    {
      videoId: "学校動画ID1",
      title: "がっこう",
      image: "images/item-contents/school/がっこう.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "せんせい",
      image: "images/item-contents/school/せんせい.jpg"
    },
    {
      videoId: "学校動画ID3",
      title: "じどう",
      image: "images/item-contents/school/じどう.jpg"
    },
    {
      videoId: "学校動画ID1",
      title: "せいと",
      image: "images/item-contents/school/せいと.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "がくせい",
      image: "images/item-contents/school/がくせい.jpg"
    },
    {
      videoId: "学校動画ID3",
      title: "べんきょう",
      image: "images/item-contents/school/べんきょう.jpg"
    },{
      videoId: "学校動画ID1",
      title: "じゅぎょう",
      image: "images/item-contents/school/じゅぎょう.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "テスト、しけん",
      image: "images/item-contents/school/テスト.jpg"
    },
    {
      videoId: "学校動画ID3",
      title: "きょうしつ",
      image: "images/item-contents/school/きょうしつ.jpg"
    },{
      videoId: "学校動画ID1",
      title: "ともだち",
      image: "images/item-contents/school/ともだち.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "あそぶ",
      image: "images/item-contents/school/あそぶ.jpg"
    },
    {
      videoId: "学校動画ID3",
      title: "やすみ",
      image: "images/item-contents/school/やすみ.jpg"
    },{
      videoId: "学校動画ID1",
      title: "がっこうへいく",
      image: "images/item-contents/school/がっこうへいく.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "がっこうにくる",
      image: "images/item-contents/school/がっこうにくる.jpg"
    },
    {
      videoId: "学校動画ID3",
      title: "（いえへ）かえる",
      image: "images/item-contents/school/（いえへ）かえる.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "ちこく",
      image: "images/item-contents/school/ちこく.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "こくご",
      image: "images/item-contents/school/こくご.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "さんすう",
      image: "images/item-contents/school/さんすう.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "えいご",
      image: "images/item-contents/school/えいご.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "りか",
      image: "images/item-contents/school/りか.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "しゃかい",
      image: "images/item-contents/school/しゃかい.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "たいいく",
      image: "images/item-contents/school/たいいく.jpg"
    },
    {
      videoId: "学校動画ID2",
      title: "おんがく",
      image: "images/item-contents/school/おんがく.jpg"
    }
  ],

//かぞく　１８個
  family: [
    {
      videoId: "家族動画ID1",
      title: "かぞく",
      image: "images/item-contents/family/かぞく.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "おとうさん",
      image: "images/item-contents/family/おとうさん.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "おかあさん",
      image: "images/item-contents/family/おかあさん.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "あに",
      image: "images/item-contents/family/あに.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "おとうと",
      image: "images/item-contents/family/おとうと.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "あね",
      image: "images/item-contents/family/あね.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "いもうと",
      image: "images/item-contents/family/いもうと.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "おじいさん",
      image: "images/item-contents/family/おじいさん.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "おばあさん",
      image: "images/item-contents/family/おばあさん.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "だんなさん",
      image: "images/item-contents/family/だんなさん.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "おくさん",
      image: "images/item-contents/family/おくさん.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "こども",
      image: "images/item-contents/family/こども.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "あかちゃん",
      image: "images/item-contents/family/あかちゃん.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "むすこ",
      image: "images/item-contents/family/むすこ.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "むすめ",
      image: "images/item-contents/family/むすめ.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "おや",
      image: "images/item-contents/family/おや.jpg"
    },
    {
      videoId: "家族動画ID1",
      title: "きょうだい",
      image: "images/item-contents/family/きょうだい.jpg"
    },
    {
      videoId: "家族動画ID2",
      title: "しまい",
      image: "images/item-contents/family/しまい.jpg"
    }
  ],

//スポーツ　１６個
  sports: [
    {
      videoId: "スポーツ動画ID1",
      title: "スポーツ",
      image: "images/item-contents/sports/スポーツ.jpg"
    },
    {
      videoId: "スポーツ動画ID2",
      title: "うんどう",
      image: "images/item-contents/sports/うんどう.jpg"
    },
    {
      videoId: "スポーツ動画ID3",
      title: "たいいく",
      image: "images/item-contents/sports/たいいく.jpg"
    },
    {
      videoId: "スポーツ動画ID3",
      title: "サッカー",
      image: "images/item-contents/sports/サッカー.jpg"
    },
    {
      videoId: "スポーツ動画ID1",
      title: "やきゅう",
      image: "images/item-contents/sports/やきゅう.jpg"
    },
    {
      videoId: "スポーツ動画ID2",
      title: "バスケ",
      image: "images/item-contents/sports/バスケ.jpg"
    },
    {
      videoId: "スポーツ動画ID3",
      title: "バレー",
      image: "images/item-contents/sports/バレー.jpg"
    },
    {
      videoId: "スポーツ動画ID1",
      title: "テニス",
      image: "images/item-contents/sports/テニス.jpg"
    },
    {
      videoId: "スポーツ動画ID2",
      title: "たっきゅう",
      image: "images/item-contents/sports/たっきゅう.jpg"
    },
    {
      videoId: "スポーツ動画ID3",
      title: "りくじょう",
      image: "images/item-contents/sports/りくじょう.jpg"
    },
    {
      videoId: "スポーツ動画ID1",
      title: "すいえい",
      image: "images/item-contents/sports/すいえい.jpg"
    },
    {
      videoId: "スポーツ動画ID2",
      title: "じゅうどう",
      image: "images/item-contents/sports/じゅうどう.jpg"
    },
    {
      videoId: "スポーツ動画ID3",
      title: "からて",
      image: "images/item-contents/sports/からて.jpg"
    },
    {
      videoId: "スポーツ動画ID1",
      title: "けんどう",
      image: "images/item-contents/sports/けんどう.jpg"
    },
    {
      videoId: "スポーツ動画ID2",
      title: "すもう",
      image: "images/item-contents/sports/すもう.jpg"
    },
    {
      videoId: "スポーツ動画ID3",
      title: "ゴルフ",
      image: "images/item-contents/sports/ゴルフ.jpg"
    }
  ],

//たべもの　２９個
  food: [
    {
      videoId: "食べ物動画ID1",
      title: "たべる",
      image: "images/item-contents/food/たべる.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "ごはん",
      image: "images/item-contents/food/ごはん.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "パン",
      image: "images/item-contents/food/パン.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "おにぎり",
      image: "images/item-contents/food/おにぎり.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "にく",
      image: "images/item-contents/food/にく.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "さかな",
      image: "images/item-contents/food/さかな.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "やさい",
      image: "images/item-contents/food/やさい.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "くだもの",
      image: "images/item-contents/food/くだもの.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "りんご",
      image: "images/item-contents/food/りんご.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "ミルク（ぎゅうにゅう）",
      image: "images/item-contents/food/ミルク.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "のむ",
      image: "images/item-contents/food/のむ.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "みず",
      image: "images/item-contents/food/みず.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "おちゃ",
      image: "images/item-contents/food/おちゃ.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "ジュース",
      image: "images/item-contents/food/ジュース.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "コーヒー",
      image: "images/item-contents/food/コーヒー.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "たまご",
      image: "images/item-contents/food/たまご.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "さしみ",
      image: "images/item-contents/food/さしみ.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "すし",
      image: "images/item-contents/food/すし.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "ラーメン",
      image: "images/item-contents/food/ラーメン.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "そば",
      image: "images/item-contents/food/そば.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "うどん",
      image: "images/item-contents/food/うどん.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "カレー",
      image: "images/item-contents/food/カレー.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "みそしる",
      image: "images/item-contents/food/みそしる.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "スープ",
      image: "images/item-contents/food/スープ.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "サラダ",
      image: "images/item-contents/food/サラダ.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "アイスクリーム",
      image: "images/item-contents/food/アイスクリーム.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "ケーキ",
      image: "images/item-contents/food/ケーキ.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "おかし",
      image: "images/item-contents/food/おかし.jpg"
    },
    {
      videoId: "食べ物動画ID1",
      title: "チョコレート",
      image: "images/item-contents/food/チョコレート.jpg"
    }
  ],

//いきもの　２０個
  animal: [
    {
      videoId: "動物動画ID1",
      title: "どうぶつ",
      image: "images/item-contents/animal/どうぶつ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "いぬ",
      image: "images/item-contents/animal/いぬ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "とり",
      image: "images/item-contents/animal/とり.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "むし",
      image: "images/item-contents/animal/むし.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "さかな",
      image: "images/item-contents/animal/さかな.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ネコ",
      image: "images/item-contents/animal/ネコ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "うさぎ",
      image: "images/item-contents/animal/うさぎ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "うま",
      image: "images/item-contents/animal/うま.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "うし",
      image: "images/item-contents/animal/うし.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ぶた",
      image: "images/item-contents/animal/ぶた.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ゾウ",
      image: "images/item-contents/animal/ゾウ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ライオン",
      image: "images/item-contents/animal/ライオン.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "トラ",
      image: "images/item-contents/animal/トラ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "クマ",
      image: "images/item-contents/animal/クマ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "キリン",
      image: "images/item-contents/animal/キリン.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "サル",
      image: "images/item-contents/animal/サル.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ゴリラ",
      image: "images/item-contents/animal/ゴリラ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "カエル",
      image: "images/item-contents/animal/カエル.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ヘビ",
      image: "images/item-contents/animal/ヘビ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "チョウ",
      image: "images/item-contents/animal/チョウ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "カメ",
      image: "images/item-contents/animal/カメ.jpg"
    },
    {
      videoId: "動物動画ID1",
      title: "ニワトリ",
      image: "images/item-contents/animal/ニワトリ.jpg"
    }
  ],

//じかん　１８個
  time: [
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
    {
      videoId: "時間動画ID1",
      title: "今日",
      image: "images/item-contents/time/今日.jpg"
    },
  ],

//ぎもんし　１２個
  question: [
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
    {
      videoId: "疑問詞動画ID1",
      title: "なに",
      image: "images/item-contents/question/なに.jpg"
    },
  ],

//せつぞくし　９個
  connection: [
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
    {
      videoId: "接続詞動画ID1",
      title: "そして",
      image: "images/item-contents/connection/そして.jpg"
    },
  ]

};






/* =========================
   ロボコンでよくつかうしゅわ
   YouTube動画IDの設定
========================= */

const roboconVideoIds = {
  "おはよう": "j1Z8ardpXis",
  "こんにちは": "mYXnAAPLxUg",
  "こんばんは": "eB2_K6bEwHk",
  "ありがとう": "6bq5nxxgghE",
  "おわる（おわった）": "UVFzpA01YhA",
  "まだ": "qdbaPcySC0w",
  "できる（だいじょうぶ）": "GZUTTCu_tzA",
  "トイレ": "iTZ9C1MTsLs",
  "なに？どうした？": "ewNMYROynHs",
  "しゅくだい": "EyPVs5cbIZY"
};

// 既存のカテゴリーに動画IDを反映
categoryData.robocon.forEach(function(item) {
  if (roboconVideoIds[item.title]) {
    item.videoId = roboconVideoIds[item.title];
  }
});








// 一覧を表示する関数
function showCategory(categoryKey) {

  const items =
    categoryData[categoryKey];

  itemContents.innerHTML = "";

  items.forEach(function(data) {

    const itemElement =
      document.createElement("div");

    itemElement.classList.add("item");

    itemElement.innerHTML = `
      <div
        class="youtube-box"
        data-video-id="${data.videoId}"
        data-title="${data.title}">

        <img
          src="${data.image}"
          alt="${data.title}の動画を見る"
          class="video-thumbnail">

      </div>

      <p class="item-title">
        ${data.title}
      </p>
    `;

    itemContents.appendChild(itemElement);

  });

}


// ★ページを開いたとき最初にロボコンを表示
showCategory("robocon");







//=========================
// 手話側  「ランダム出題→つぎへ」
//=========================
const quizVideo =
  document.querySelector("#quiz-video");


let currentQuizCategoryKey = "robocon";

let quizRemainingItems = [];

let currentQuizItem = null;

// しゅわクイズの回答履歴
let signResults = [];

// 同じ問題への重複回答を防ぐ
let signAnswered = false;


/* =========================
   クイズ開始
========================= */

function startQuiz() {

  // 回答履歴をリセット
  signResults = [];
  signAnswered = false;

  // 選択中カテゴリーの問題をコピー
  quizRemainingItems =
    [...categoryData[currentQuizCategoryKey]];

  // 1問目を出す
  showNextQuiz();
}


/* =========================
   次の問題
========================= */

function showNextQuiz() {

  currentQuizItem = null;
  signAnswered = false;

  quizAnswerInput.value = "";

  quizAnswerTitle.style.display = "none";
  quizAfterButtons.style.display = "none";

  // 全問終了
  if (quizRemainingItems.length === 0) {

    quizVideo.textContent =
      "このカテゴリーのクイズは ぜんぶ おわりました！";

    quizVideo.classList.add("quiz-complete");

    quizAnswerArea.style.display = "none";

    // 結果を見るボタンだけ表示
    quizAfterButtons.style.display = "flex";

    nextQuizButton.style.display = "none";

    return;
  }

  quizVideo.classList.remove("quiz-complete");
  nextQuizButton.style.display = "";

  // ランダムに1問選ぶ
  const randomIndex =
    Math.floor(Math.random() * quizRemainingItems.length);

  currentQuizItem =
    quizRemainingItems.splice(randomIndex, 1)[0];

  // YouTube動画を表示
  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.youtube.com/embed/" +
    encodeURIComponent(currentQuizItem.videoId);

  iframe.title = "しゅわクイズのどうが";

  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  iframe.allowFullscreen = true;

  quizVideo.replaceChildren(iframe);

  quizAnswerArea.style.display = "flex";
}


















//=========================
// 「こたえる」を押したときの処理
//=========================
quizAnswerButton.addEventListener("click", function() {

  if (!currentQuizItem || signAnswered) {
    return;
  }

  const answer = quizAnswerInput.value.trim();

  if (answer === "") {
    alert("こたえを いれてね！");
    return;
  }

  signAnswered = true;

  // 回答履歴を保存
  signResults.push({
    answer: answer,
    title: currentQuizItem.title,
    correct: answer === currentQuizItem.title
  });

  // 回答欄を非表示
  quizAnswerArea.style.display = "none";


// 正しい答えと正誤画像を表示
showQuizAnswerWithImage(
  quizAnswerTitle,
  currentQuizItem.title,
  answer === currentQuizItem.title
);


  // 「けっかをみる」「つぎへ」を表示
  quizAfterButtons.style.display = "flex";

});




// ==============================
// 「つぎへ」で次の問題を出すときは、状態を元に戻して、次の問題を出す処理
// ==============================
nextQuizButton.addEventListener(
  "click",
  function(event) {

    event.preventDefault();


    // 次の問題を表示
    showNextQuiz();


    // 回答欄を再表示
    quizAnswerArea.style.display =
      "flex";


    // 正解を非表示
    quizAnswerTitle.style.display =
      "none";


    // 2つのボタンを非表示
    quizAfterButtons.style.display =
      "none";


    // 入力内容を空にする
    quizAnswerInput.value = "";

  }
);


// ==============================
// しゅわクイズの結果表示
// ==============================


viewResultsButton.addEventListener("click", function(event) {
  event.preventDefault();

  const correct =
    signResults.filter(result => result.correct).length;

  const score = document.querySelector("#quiz-result-score");
  const list = document.querySelector("#quiz-result-list");

  score.textContent =
    "せいかい：" + correct + " / " +
    signResults.length + "もん";

  list.innerHTML = "";

  signResults.forEach(function(result) {
    const row = document.createElement("div");
    row.className = "quiz-result-row";

    const name = document.createElement("strong");
    name.textContent =
      (result.correct ? "○ " : "× ") + result.title;

    const answer = document.createElement("span");
    answer.textContent = "こたえ：" + result.answer;

    row.appendChild(name);
    row.appendChild(answer);
    list.appendChild(row);
  });

  document.querySelector("#quiz-result-modal")
    .classList.add("is-open");
});

// モーダルを閉じる
function closeQuizResultModal() {
  document.querySelector("#quiz-result-modal")
    .classList.remove("is-open");
}

document.querySelector("#quiz-result-close")
  .addEventListener("click", closeQuizResultModal);

document.querySelector("#quiz-result-done")
  .addEventListener("click", closeQuizResultModal);

// モーダルの外側をクリックして閉じる
document.querySelector("#quiz-result-modal")
  .addEventListener("click", function(event) {
    if (event.target === this) {
      closeQuizResultModal();
    }
  });

// Escキーでも閉じる
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeQuizResultModal();
  }
});










// ==============================
// 手話検索
// ==============================

// 共通：手話を表示
function showItems(items) {

  itemContents.innerHTML = "";

  items.forEach(function(data) {

    const itemElement =
      document.createElement("div");

    itemElement.classList.add("item");

  itemElement.innerHTML = `
    <div
      class="youtube-box"
      data-video-id="${data.videoId}"
      data-title="${data.title}">

      <img
        src="${data.image}"
        alt="${data.title}の動画を見る"
        class="video-thumbnail">

      <div class="image-icon-wrapper">

        <img
          src="images/画像表示.png"
          alt="画像表示"
          class="image-display-icon"
          data-image-src="${data.image}"
          data-image-title="${data.title}">

        <span class="image-tooltip">
          クリックすると<br>
          がぞうがひらくよ！
        </span>

      </div>

    </div>

    <p class="item-title">
      ${data.title}
    </p>
  `;

    itemContents.appendChild(itemElement);

  });

}


// カテゴリー表示
function showCategory(categoryKey) {

  const items =
    categoryData[categoryKey];

  showItems(items);

}


// 検索
function searchSign() {

  const keyword =
    signSearchInput.value.trim();


  // 何も入力されていない場合
  if (keyword === "") {

    return;
  }


  // 現在選択中カテゴリーのデータ
  const items =
    categoryData[
      currentSignCategoryKey
    ];


  // 念のため
  if (!items) {
    return;
  }


  // 現在のカテゴリー内だけ検索
  const searchResults =
    items.filter(function(data) {

      return data.title.includes(
        keyword
      );

    });


  // 見つからなかった場合
  if (searchResults.length === 0) {

    itemContents.innerHTML = `
      <p class="no-result">
        「${keyword}」は
        みつかりませんでした。
      </p>
    `;

    return;
  }


  // 検索結果を表示
  showItems(
    searchResults
  );

}





// ==============================
// 「けんさく」ボタンを押したとき
// ==============================

signSearchButton.addEventListener("click", function() {

  searchSign();

});


// 
// Enterキーを押したとき
// 
signSearchInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {

    searchSign();

  }

});










//=========================
//   右側カテゴリーをクリックしたときの処理
//=========================
categoryItems.forEach(function(item) {

  item.addEventListener("click", function() {

    // 全カテゴリーからactiveを外す
    categoryItems.forEach(function(button) {
      button.classList.remove("active");
    });

    // クリックしたカテゴリーだけactive
    item.classList.add("active");


// =========================
// 案内画面 → 学習画面
// =========================
  // 最初の案内画面を消す
  signCategoryGuide.style.display =
    "none";

  // しらべる・クイズを表示
  modeSwitch.style.display =
    "flex";

  // しらべる画面を表示
  //searchScreen.style.display =
  //  "block";

  //quizScreen.style.display =
  //  "none";



    // 選択されたカテゴリーを取得
      const categoryKey =
        item.dataset.category;

    // 左上にはカテゴリー名だけを表示（吹き出しの文章は含めない）
    const categoryName = Array.from(item.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .map(node => node.textContent)
      .join("")
      .replace(/\s+/g, "");
    modeSwitch.dataset.category = categoryName;

    // 未完成カテゴリーでは、一覧・クイズの代わりに案内画像を表示
    if (item.classList.contains("category-incomplete")) {
      signIncompleteScreen.hidden = false;
      modeSwitch.classList.add("show-incomplete");
      searchScreen.style.display = "none";
      quizScreen.style.display = "none";
      searchArea.style.display = "none";
      return;
    }

    // 完成カテゴリーに戻ったら通常画面を復元
    signIncompleteScreen.hidden = true;
    modeSwitch.classList.remove("show-incomplete");

    // 現在選択中のカテゴリーを保存
    // 検索用
    currentSignCategoryKey =
      categoryKey;
    // クイズ用
    currentQuizCategoryKey =
      categoryKey;

        // 今「クイズ」が選ばれている場合
    if (quizButton.classList.contains("active")) {

      // クイズ画面のままにする
      quizScreen.style.display = "block";
      searchScreen.style.display = "none";
      searchArea.style.display = "none";

      // 新しいカテゴリーでクイズを開始
      startQuiz();

    } else {

      // 「しらべる」が選ばれている場合
      searchScreen.style.display = "block";
      quizScreen.style.display = "none";
      searchArea.style.display = "block";

    }





    // そのカテゴリーのデータを取得
    const items =
      categoryData[categoryKey];


    // 一度、中身を空にする
    itemContents.innerHTML = "";


    // 新しいitemを作る
    items.forEach(function(data) {

      const itemElement =
        document.createElement("div");

      itemElement.classList.add("item");


      itemElement.innerHTML = `
        <div
          class="youtube-box"
          data-video-id="${data.videoId}"
          data-title="${data.title}">

          <img
            src="${data.image}"
            alt="${data.title}の動画を見る"
            class="video-thumbnail">

              <div class="image-icon-wrapper">

                <img
                  src="images/画像表示.png"
                  alt="画像表示"
                  class="image-display-icon"
                  data-image-src="${data.image}"
                  data-image-title="${data.title}">

                <span class="image-tooltip">
                  クリックすると<br>
                  がぞうがひらくよ！
                </span>

              </div>

        </div>

        <p class="item-title">
          ${data.title}
        </p>
      `;


      itemContents.appendChild(itemElement);

    });

  });

});





//=========================
// 指文字側の「しらべる／クイズ」
//=========================

// 「しらべる」をクリック
fingerSearchButton.addEventListener("click", function() {

  // ボタン
  fingerSearchButton.classList.add("active");
  fingerQuizButton.classList.remove("active");

  // 画面
  fingerSearchScreen.style.display = "block";
  fingerQuizScreen.style.display = "none";

  // 選択中のカテゴリーに応じて表示
  if (currentFingerCategoryKey === "chart") {

    // ゆびもじひょう
    fingerChart.style.display = "block";
    fingerItemContents.style.display = "none";
    fingerItemSearchArea.style.display = "none";

  } else {

    // おともだち・せんせい
    fingerChart.style.display = "none";
    fingerItemContents.style.display = "grid";
    fingerItemSearchArea.style.display = "flex";

  }

});


// 「クイズ」をクリック
fingerQuizButton.addEventListener("click", function() {

  // ボタン
  fingerQuizButton.classList.add("active");
  fingerSearchButton.classList.remove("active");

  // 画面
  fingerSearchScreen.style.display = "none";
  fingerQuizScreen.style.display = "block";

  // 指文字クイズを開始
  startFingerQuiz();

});



//=========================
//   「ゆびもじひょう／おともだち／せんせい」のactive処理
//=========================
fingerCategoryItems.forEach(function(item) {

  item.addEventListener(
    "click",
    function() {

    // 全カテゴリーからactiveを外す
    fingerCategoryItems.forEach(function(button) {
      button.classList.remove("active");
    });

    // クリックしたカテゴリーだけactive
    item.classList.add("active");



      // =========================
      // 案内画面 → 学習画面
      // =========================

      fingerCategoryGuide.style.display =
        "none";

      fingerModeSwitch.style.display =
        "flex";


      // 全ボタンからactiveを外す
      fingerCategoryItems.forEach(
        function(button) {

          button.classList.remove(
            "active"
          );

        }
      );


      // クリックしたものをactive
      item.classList.add(
        "active"
      );


      // 選択されたカテゴリーを取得
      const categoryKey =
        item.dataset.category;

      // 説明文を変更
      if (categoryKey === "chart") {

        fingerSubtitle.innerHTML =
          "がぞうを おすと、<br>" +
          "ゆびもじが おおきく みられるよ！";
      }

      
      // 現在選択中のカテゴリーを保存
      currentFingerCategoryKey =
        categoryKey;

        if (fingerQuizButton.classList.contains("active")) {

        // クイズ画面のまま
        fingerQuizScreen.style.display = "block";
        fingerSearchScreen.style.display = "none";
        fingerItemSearchArea.style.display = "none";

        // 新しいカテゴリーで指文字クイズを開始
        startFingerQuiz();

      } else {

        // しらべる画面のまま
        fingerSearchScreen.style.display = "block";
        fingerQuizScreen.style.display = "none";

      }


      // 表示名取得
       const categoryName =
         item.textContent.trim();


      // 左上のカテゴリー名変更
      fingerModeSwitch.dataset.category =
        categoryName;



      // =========================
      // 「ゆびもじひょう」の処理
      // =========================

      if (categoryKey === "chart") {

        fingerChart.style.display =
          "block";

        fingerItemContents.style.display =
          "none";

        fingerItemSearchArea.style.display =
          "none";

        fingerItemSearchInput.value =
          "";

        return;
      }





// =========================
// 指文字
// おともだち・せんせい検索
// =========================

function searchFingerItems() {

  const keyword =
    fingerItemSearchInput.value.trim();


  // 何も入力されていない
  if (keyword === "") {

    showFingerItems(
      fingerCategoryData[
        currentFingerCategoryKey
      ]
    );

    return;
  }


  // 現在選択中カテゴリーのデータ
  const items =
    fingerCategoryData[
      currentFingerCategoryKey
    ];


  // 検索
  const searchResults =
    items.filter(function(data) {

      return data.title.includes(
        keyword
      );

    });


  // 見つからなかった
  if (searchResults.length === 0) {

    fingerItemContents.innerHTML = `
      <p class="no-result">
        「${keyword}」は
        みつかりませんでした。
      </p>
    `;

    return;
  }


  // 検索結果を表示
  showFingerItems(
    searchResults
  );
}




// 指文字側 「けんさく」ボタンとEnterキー
fingerItemSearchInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      searchFingerItems();

    }

  }
);






      // =========================
      // おともだち・せんせい
      // =========================

      fingerChart.style.display =
        "none";

      fingerItemContents.style.display =
        "grid";

      /* 検索欄は「しらべる」モードだけ表示 */
      fingerItemSearchArea.style.display =
        fingerQuizButton.classList.contains("active") ? "none" : "flex";

      /* 前の検索文字を消す */
      fingerItemSearchInput.value =
        "";

      showFingerItems(
        fingerCategoryData[categoryKey]
      );

    }
  );

});


// =========================
// 指文字
// おともだち・せんせい検索
// =========================

function searchFingerItems() {

  const keyword =
    fingerItemSearchInput.value.trim();


  // 現在のカテゴリー
  const items =
    fingerCategoryData[
      currentFingerCategoryKey
    ];


  // 念のため
  if (!items) {
    return;
  }


  // 何も入力されていない
  if (keyword === "") {

    showFingerItems(
      items
    );

    return;
  }


  // 検索
  const searchResults =
    items.filter(function(data) {

      return data.title.includes(
        keyword
      );

    });


  // 見つからなかった
  if (searchResults.length === 0) {

    fingerItemContents.innerHTML = `
      <p class="no-result">
        「${keyword}」は
        みつかりませんでした。
      </p>
    `;

    return;
  }


  // 検索結果
  showFingerItems(
    searchResults
  );

}


//=========================
//   以下のコードで静止画像をクリックするとモーダルが開く。
//=========================
itemContents.addEventListener("click", function(event) {

  // =========================
  // 左上の画像アイコンをクリック
  // =========================
  const imageIcon =
    event.target.closest(".image-display-icon");

  if (imageIcon) {

    const imageSrc =
      imageIcon.dataset.imageSrc;

    const imageTitle =
      imageIcon.dataset.imageTitle;

    modalImage.src =
      imageSrc;

    modalImage.alt =
      imageTitle;

    imageModalTitle.textContent =
      imageTitle;

    imageModal.style.display =
      "flex";

    // ここが重要
    return;
  }

















  // =========================
  // 通常の手話画像をクリック
  // → YouTube動画
  // =========================
  const box =
    event.target.closest(".youtube-box");


  // youtube-boxではなければ何もしない
  if (!box) {
    return;
  }


  // YouTube動画ID
  const videoId =
    box.dataset.videoId;


  // タイトル
  const title =
    box.dataset.title;


  // iframeを作成
  const iframe =
    document.createElement("iframe");


  iframe.src =
    "https://www.youtube.com/embed/"
    + videoId
    + "?autoplay=1";


  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";


  iframe.allowFullscreen = true;


  // 前の動画を消す
  modalYoutube.innerHTML = "";


  // iframeを追加
  modalYoutube.appendChild(iframe);


  // タイトル
  modalTitle.textContent =
    title;


  // モーダル表示
  videoModal.style.display =
    "flex";

});




// =========================
// 静止画像：×で閉じる
// =========================
imageModalClose.addEventListener(
  "click",
  function() {

    imageModal.style.display =
      "none";

    modalImage.src = "";
  }
);


// =========================
// 静止画像：背景で閉じる
// =========================

imageModal.addEventListener(
  "click",
  function(event) {

    if (event.target === imageModal) {

      imageModal.style.display =
        "none";

      modalImage.src = "";
    }

  }
);







//=========================
// 手話  動画モーダル：×で閉じる
//=========================
modalClose.addEventListener("click", function() {

  videoModal.style.display = "none";

  // 動画を停止するためにiframeを削除
  modalYoutube.innerHTML = "";

});



// =========================
// 手話  動画モーダル：背景で閉じる
// =========================

videoModal.addEventListener("click", function(event) {

  if (event.target === videoModal) {

    videoModal.style.display = "none";

    modalYoutube.innerHTML = "";

  }

});




// =========================
// 指文字側の指文字表のホットスポットをクリックしたときの処理
// =========================
const fingerChart =
  document.querySelector("#finger-chart");

const fingerItemContents =
  document.querySelector("#finger-item-contents");



// =========================
// 指文字表をクリックすると対応する画像を表示
// =========================
fingerChart.addEventListener("click", function(event) {

  const hotspot = event.target.closest(".finger-hotspot");

  if (!hotspot) {
    return;
  }

  // クリックした指文字の名前を取得
  const letter = hotspot.dataset.letter;

  if (!letter) {
    return;
  }

  // 指文字の名前と同じPNG画像を指定
  const imagePath =
    "Fingerspelling/" + encodeURIComponent(letter) + ".png";

  // 画像モーダルに表示
  modalImage.src = imagePath;
  modalImage.alt = letter + "の指文字";

  // タイトル
  imageModalTitle.textContent = letter;

  // 画像モーダルを開く
  imageModal.style.display = "flex";

});








/* =========================
   ゆびもじ：カテゴリー別データ
========================= */

const fingerCategoryData = {

  // おともだち（１くみ）のなまえ
  "friends-1": [
    {
      videoId: "YouTube動画ID1",
      title: "おうらい",
      image: "images/finger/friends/たろう.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "たまき",
      image: "images/finger/friends/はなこ.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "すばる",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "せいは",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "えいと",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "みずき",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "りくと",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "しょうた",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "あやと",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "ひより",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "あおい",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "そうし",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "かなと",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "こうせい",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "こう",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "しょうき",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "たかあき",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "あいと",
      image: "images/finger/friends/ゆ.jpg"
    }
  ],

  // おともだち（２くみ）のなまえ
  "friends-2": [
    {
      videoId: "YouTube動画ID1",
      title: "ひろのぶ",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "せな",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "ひろと",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "けんのすけ",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "けんせい",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "せいゆう",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "ゆうしゅん",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "ひろむ",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID3",
      title: "れみ",
      image: "images/finger/friends/ゆ.jpg"
    },
    {
      videoId: "YouTube動画ID1",
      title: "かい",
      image: "images/finger/friends/た.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "こうき",
      image: "images/finger/friends/は.jpg"
    },
    {
      videoId: "YouTube動画ID2",
      title: "あおい",
      image: "images/finger/friends/は.jpg"
    }
  ],

  // せんせいのなまえ
  teachers: [
    {
      videoId: "YouTube動画ID4",
      title: "たすくせんせい",
      image: "images/finger/teachers/たすくせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "しょうへいせんせい",
      image: "images/finger/teachers/しょうへいせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "いくせんせい",
      image: "images/finger/teachers/いくせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID4",
      title: "よしえせんせい",
      image: "images/finger/teachers/よしえせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "ともこせんせい",
      image: "images/finger/teachers/ともこせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "きゆなせんせい",
      image: "images/finger/teachers/きゆなせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "かなでせんせい",
      image: "images/finger/teachers/かなでせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "とくじせんせい",
      image: "images/finger/teachers/とくじせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID4",
      title: "みやぎせんせい",
      image: "images/finger/teachers/みやぎせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "ななこせんせい",
      image: "images/finger/teachers/ななこせんせい.jpg"
    },
    {
      videoId: "YouTube動画ID5",
      title: "かおりせんせい",
      image: "images/finger/teachers/かおりせんせい.jpg"
    }
  ]

};

// おともだち（ぜんいん）
// １くみ＋２くみを結合し、同じ名前は重複させない
fingerCategoryData["friends-all"] = [
  ...new Map(
    [
      ...fingerCategoryData["friends-1"],
      ...fingerCategoryData["friends-2"]
    ].map(item => [item.title, item])
  ).values()
];




// =========================
// 指文字クイズを開始する関数
// =========================
let currentFingerCategoryKey = 'chart';
// 学習画面と同じDOMを維持し、動画と回答状態だけを更新する。
const fingerQuizVideo = document.querySelector('#finger-quiz-video');
const fingerAnswerArea = document.querySelector('#finger-quiz-answer-area');
const fingerAnswerInput = document.querySelector('#finger-quiz-answer-input');
const fingerAnswerTitle = document.querySelector('#finger-quiz-answer-title');
const fingerAfterButtons = document.querySelector('#finger-quiz-after-buttons');
const fingerNextButton = document.querySelector('#finger-next-quiz-button');
let fingerRemainingItems = [];
let fingerCurrentItem = null;
let fingerResults = [];
let fingerAnswered = false;


function startFingerQuiz() {

  let items = [];

  if (currentFingerCategoryKey === "chart") {

    // 指文字表に登録されているひらがなを取得
    const letters = [
      ...new Set(
        Array.from(
          fingerChart.querySelectorAll(".finger-hotspot"),
          item => item.dataset.letter
        ).filter(letter =>
          letter && /^[ぁ-ゖ]$/.test(letter)
        )
      )
    ];

    // 10問分のランダムな文字列を生成
    const usedAnswers = new Set();

    if (letters.length < 5) {
      alert("指文字が5種類以上必要です。");
      return;
    }

    while (items.length < 10) {

      // 3〜5枚からランダムに決定
      const count = Math.floor(Math.random() * 3) + 3;

      // 文字の順番をシャッフル
      const shuffled = [...letters];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] =
          [shuffled[j], shuffled[i]];
      }

      // 重複のない3〜5文字を取得
      const selected = shuffled.slice(0, count);
      const title = selected.join("");

      // 同じ問題を出さない
      if (usedAnswers.has(title)) continue;

      usedAnswers.add(title);

      items.push({
        title: title,
        letters: selected
      });
    }

  } else {

    // おともだち・せんせいは従来どおり
    items = fingerCategoryData[currentFingerCategoryKey] || [];

  }

  fingerRemainingItems = [...items];
  fingerResults = [];

  fingerItemSearchArea.style.display = "none";


  
const fingerQuizSubtitle =
  document.querySelector("#finger-quiz-subtitle");

if (currentFingerCategoryKey === "chart") {
  fingerQuizSubtitle.innerHTML =
    "したの ゆびもじを じゅんばんに よんで、" +
    "こたえを いれてね😊<br>" +
    "【ちゅうい】ひらがなでいれてね！";
} else {
  fingerQuizSubtitle.innerHTML =
    "したのどうがの ゆびもじをみて、" +
    "なまえをいれてね😊<br>" +
    "【ちゅうい】ひらがなでいれてね！";
}

  showNextFingerQuiz();
}



function showNextFingerQuiz() {

  fingerCurrentItem = null;
  fingerAnswered = false;

  fingerAnswerInput.value = "";
  fingerAnswerTitle.style.display = "none";
  fingerAfterButtons.style.display = "none";

  // 全問終了
  if (!fingerRemainingItems.length) {

    fingerQuizVideo.textContent =
      "このカテゴリーのクイズは ぜんぶ おわりました！";

    fingerQuizVideo.classList.add("quiz-complete");

    fingerAnswerArea.style.display = "none";
    fingerAfterButtons.style.display = "flex";
    fingerNextButton.style.display = "none";

    return;
  }

  fingerQuizVideo.classList.remove("quiz-complete");
  fingerNextButton.style.display = "";

  // 次の問題をランダムに選択
  const randomIndex =
    Math.floor(Math.random() * fingerRemainingItems.length);

  fingerCurrentItem =
    fingerRemainingItems.splice(randomIndex, 1)[0];

  // ゆびもじひょうの場合
  if (currentFingerCategoryKey === "chart") {

    const imageArea = document.createElement("div");
    imageArea.className = "finger-random-quiz-images";

    fingerCurrentItem.letters.forEach(function(letter) {

      const img = document.createElement("img");

      img.src =
        "Fingerspelling/" +
        encodeURIComponent(letter) +
        ".png";

      img.alt = "指文字クイズの画像";
      img.loading = "eager";

      imageArea.appendChild(img);

    });

    fingerQuizVideo.replaceChildren(imageArea);

  } else {

    // おともだち・せんせいは従来どおり動画表示
    const iframe = document.createElement("iframe");

    iframe.src =
      "https://www.youtube.com/embed/" +
      encodeURIComponent(fingerCurrentItem.videoId);

    iframe.title = "ゆびもじクイズのどうが";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; " +
      "encrypted-media; gyroscope; picture-in-picture";

    iframe.allowFullscreen = true;

    fingerQuizVideo.replaceChildren(iframe);

  }

  fingerAnswerArea.style.display = "flex";
}




function answerFingerQuiz() {

  if (!fingerCurrentItem || fingerAnswered) return;

  const answer = fingerAnswerInput.value.trim();

  if (!answer) {
    alert("こたえを いれてね！");
    return;
  }

  fingerAnswered = true;

  // 正解かどうかを判定
  const isCorrect =
    answer === fingerCurrentItem.title;

  // 回答履歴を保存
  fingerResults.push({
    answer: answer,
    title: fingerCurrentItem.title,
    correct: isCorrect
  });

  // 回答欄を非表示
  fingerAnswerArea.style.display = "none";

  // 正誤画像と正しい答えを表示
  showQuizAnswerWithImage(
    fingerAnswerTitle,
    fingerCurrentItem.title,
    isCorrect
  );

  // 「けっかをみる」「つぎへ」を表示
  fingerAfterButtons.style.display = "flex";
}




document.querySelector('#finger-quiz-answer-button').addEventListener('click', answerFingerQuiz);
fingerAnswerInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.isComposing) answerFingerQuiz();
});
fingerNextButton.addEventListener('click', event => {
  event.preventDefault();
  showNextFingerQuiz();
});


/* =========================
   ゆびもじクイズの結果表示
========================= */

document.querySelector("#finger-view-results-button")
  .addEventListener("click", function(event) {

    event.preventDefault();

    // 正解数を数える
    const correct =
      fingerResults.filter(result => result.correct).length;

    // 既存のクイズ結果モーダルを取得
    const score =
      document.querySelector("#quiz-result-score");

    const list =
      document.querySelector("#quiz-result-list");

    // 正解数を表示
    score.textContent =
      "せいかい：" +
      correct +
      " / " +
      fingerResults.length +
      "もん";

    // 前回の結果を消去
    list.innerHTML = "";

    // 各問題の結果を表示
    fingerResults.forEach(function(result) {

      const row = document.createElement("div");
      row.className = "quiz-result-row";

      const name = document.createElement("strong");
      name.textContent =
        (result.correct ? "○ " : "× ") + result.title;

      const answer = document.createElement("span");
      answer.textContent = "こたえ：" + result.answer;

      row.appendChild(name);
      row.appendChild(answer);

      list.appendChild(row);

    });

    // モーダルを開く
    document.querySelector("#quiz-result-modal")
      .classList.add("is-open");

  });





// =========================
// 「おともだち」「せんせい」のアイテムを作る関数
// =========================



function showFingerItems(items) {

  fingerItemContents.innerHTML = "";

items.forEach(function(data) {

    const itemElement = document.createElement("div");
    itemElement.className = "finger-item";

    // せんせいは最後の4文字を1枚の画像にする
    const letters = data.title.endsWith("せんせい")
      ? [
          ...Array.from(data.title.slice(0, -4)),
          "せんせい"
        ]
      : Array.from(data.title);

    // 指文字画像の一覧
    const images = letters.map(function(letter) {
      return {
        letter: letter,
        src: "Fingerspelling/" +
          encodeURIComponent(letter) + ".png"
      };
    });

    // 画像全体の外枠
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "finger-image-wrapper";

    // 動画を開くボタン
    const imageButton = document.createElement("button");
    imageButton.type = "button";
    imageButton.className = "finger-image-button";

    imageButton.setAttribute(
      "aria-label",
      data.title + "の動画を見る"
    );

    const imageArea = document.createElement("div");
    imageArea.className = "finger-spelling-images";

    images.forEach(function(image) {

      const img = document.createElement("img");

      img.src = image.src;
      img.alt = image.letter + "の指文字";
      img.className = "finger-letter-image";
      img.loading = "lazy";

      imageArea.appendChild(img);

    });

    imageButton.appendChild(imageArea);

    // 指文字画像をクリック → YouTube動画
    imageButton.addEventListener("click", function() {

      const iframe = document.createElement("iframe");

      iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(data.videoId) +
        "?autoplay=1";

      iframe.title = data.title + "の動画";

      iframe.allow =
        "accelerometer; autoplay; clipboard-write; " +
        "encrypted-media; gyroscope; picture-in-picture";

      iframe.allowFullscreen = true;

      modalYoutube.replaceChildren(iframe);

      modalTitle.textContent = data.title;

      videoModal.style.display = "flex";

    });

    // 左上の画像表示アイコン
    const iconWrapper = document.createElement("div");
    iconWrapper.className = "finger-image-icon-wrapper";

    const imageIcon = document.createElement("button");
    imageIcon.type = "button";
    imageIcon.className = "finger-image-open-button";

    imageIcon.setAttribute(
      "aria-label",
      data.title + "の指文字画像を拡大表示"
    );

    const iconImage = document.createElement("img");
    iconImage.src = "images/画像表示.png";
    iconImage.alt = "";
    iconImage.className = "image-display-icon";

    imageIcon.appendChild(iconImage);

    const tooltip = document.createElement("span");
    tooltip.className = "image-tooltip";
    tooltip.innerHTML =
      "クリックすると<br>がぞうがひらくよ！";

    iconWrapper.appendChild(imageIcon);
    iconWrapper.appendChild(tooltip);

    // 左上アイコン → 指文字画像モーダル
    imageIcon.addEventListener("click", function(event) {

      event.stopPropagation();

      openFingerSpellingModal(data.title, images);

    });

    // 画像全体を組み立てる
    imageWrapper.appendChild(imageButton);
    imageWrapper.appendChild(iconWrapper);

    // 名前
    const title = document.createElement("p");
    title.className = "finger-item-title";
    title.textContent = data.title;

    itemElement.appendChild(imageWrapper);
    itemElement.appendChild(title);

    fingerItemContents.appendChild(itemElement);

  });

}



// =========================
// 指文字専用モーダル
// =========================

const fingerSpellingModal =
  document.querySelector("#finger-spelling-modal");

const fingerModalImages =
  document.querySelector("#finger-modal-images");

const fingerModalClose =
  document.querySelector("#finger-modal-close");


// モーダルを開く
function openFingerSpellingModal(title, images) {

  fingerModalImages.innerHTML = "";
  //fingerModalTitle.textContent = title;

  images.forEach(function(image) {

    const letterItem = document.createElement("div");
    letterItem.className = "finger-modal-letter-item";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.letter + "の指文字";

    const letterText = document.createElement("p");
    letterText.textContent = image.letter;

    letterItem.appendChild(img);
    letterItem.appendChild(letterText);

    fingerModalImages.appendChild(letterItem);

  });

  fingerSpellingModal.style.display = "flex";
}


// モーダルを閉じる
function closeFingerSpellingModal() {
  fingerSpellingModal.style.display = "none";
}


// ×ボタンで閉じる
fingerModalClose.addEventListener(
  "click",
  closeFingerSpellingModal
);


// モーダルの外側をクリックすると閉じる
fingerSpellingModal.addEventListener("click", function(event) {
  if (event.target === fingerSpellingModal) {
    closeFingerSpellingModal();
  }
});


// Escキーで閉じる
document.addEventListener("keydown", function(event) {
  if (
    event.key === "Escape" &&
    fingerSpellingModal.style.display === "flex"
  ) {
    closeFingerSpellingModal();
  }
});








// =========================
// 指文字用   「おともだち」「せんせい」動画をクリックして既存のYouTubeモーダルを開く処理
// アイコンをクリックしたら手話側と同じ静止画像モーダルを開く
// =========================
fingerItemContents.addEventListener(
  "click",
  function(event) {

    // =========================
    // 画像表示アイコンをクリック
    // =========================

    const imageIcon =
      event.target.closest(
        ".image-display-icon"
      );

    if (imageIcon) {

      const imageSrc =
        imageIcon.dataset.imageSrc;

      const imageTitle =
        imageIcon.dataset.imageTitle;


      // 静止画像モーダルに画像を表示
      modalImage.src =
        imageSrc;

      modalImage.alt =
        imageTitle;

      imageModalTitle.textContent =
        imageTitle;

      imageModal.style.display =
        "flex";


      // ここで処理終了
      // YouTubeモーダルの処理には進まない
      return;
    }


    // =========================
    // 通常の静止画像をクリック
    // =========================

    const box =
      event.target.closest(
        ".finger-youtube-box"
      );

    if (!box) {
      return;
    }


    const videoId =
      box.dataset.videoId;

    const title =
      box.dataset.title;


    const iframe =
      document.createElement(
        "iframe"
      );

    iframe.src =
      "https://www.youtube.com/embed/"
      + videoId
      + "?autoplay=1";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    iframe.allowFullscreen =
      true;


    modalYoutube.innerHTML =
      "";

    modalYoutube.appendChild(
      iframe
    );

    modalTitle.textContent =
      title;

    videoModal.style.display =
      "flex";

  }
);





