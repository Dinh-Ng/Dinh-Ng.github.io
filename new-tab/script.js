// Lấy ra element có id "container"
const container = document.getElementById("container");

// Mảng chứa dữ liệu các item (bạn có thể thay đổi dữ liệu này)
const items = [
    { text: "Truyenqq", link: "https://truyenqqto.com" },
    { text: "HoyoMap", link: "https://act.hoyolab.com/ys/app/interactive-map/index.html" },
    { text: "Seelie", link: "https://seelie.me/planner" },
    { text: "Seelie ZZZ", link: "https://zzz.seelie.me/planner" },
    { text: "HoyoMap", link: "https://act.hoyolab.com/ys/app/interactive-map/index.html" },
    { text: "Genshin Material", link: "https://docs.google.com/spreadsheets/d/19FZsuNH-_1vd5Np5OFKWJWVOQXBpE0D-GLlIjxdAuAM/edit?ouid=110511358014061828669&usp=sheets_home&ths=true" },
    { text: "Genshin Primogem Counter", link: "https://docs.google.com/spreadsheets/d/1ziDADtCxijE-pJROcL4qoVu8jryYIwPFWbyeKSXG5vA" },
    { text: "", link: "" },
];

// Tạo các button và append vào container
items.forEach(item => {
    const button = document.createElement("button");

    // Tạo element image và append vào button
    const image = document.createElement("img");
    image.src = "http://www.google.com/s2/favicons?domain=" + item.link;
    button.appendChild(image);
    button.textContent = item.text;

    // Thêm sự kiện onclick để chuyển hướng
    button.onclick = function () {
        window.location.href = item.link;
    };

    container.appendChild(button);
});