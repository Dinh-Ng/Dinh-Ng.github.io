// Lấy ra element có id "container"
const container = document.getElementById("container");

// Mảng chứa dữ liệu các item (bạn có thể thay đổi dữ liệu này)
const items = [
  { text: "Truyenqq", link: "https://truyenqqto.com" },
  {
    text: "HoyoMap",
    link: "https://act.hoyolab.com/ys/app/interactive-map/index.html",
  },
  { text: "Seelie", link: "https://seelie.me/planner" },
  { text: "Seelie ZZZ", link: "https://zzz.seelie.me/planner" },
  {
    text: "GI Material",
    icon: "https://ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico",
    link: "https://docs.google.com/spreadsheets/d/19FZsuNH-_1vd5Np5OFKWJWVOQXBpE0D-GLlIjxdAuAM/edit?ouid=110511358014061828669&usp=sheets_home&ths=true",
  },
  {
    text: "GI Primogem Counter",
    icon: "https://ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico",
    link: "https://docs.google.com/spreadsheets/d/1ziDADtCxijE-pJROcL4qoVu8jryYIwPFWbyeKSXG5vA",
  },
  { text: "", link: "" },
];

// Tạo các button và append vào container
items.forEach((item) => {
  const button = document.createElement("a");
  //   button.textContent = item.text;

  // Tạo element image và append vào button
  const image = document.createElement("img");
  image.src =
    item.icon ?? "http://www.google.com/s2/favicons?domain=" + item.link;
  button.appendChild(image);

  // Create text button
  const text = document.createElement("p");
  text.textContent = item.text;
  button.appendChild(text);

  // Thêm sự kiện onclick để chuyển hướng
  button.href = item.link

  const parent = document.createElement("div");
  parent.id = "bookmark";
  parent.appendChild(button);

  container.appendChild(parent);
});
