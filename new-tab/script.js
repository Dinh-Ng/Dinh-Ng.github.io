// Lấy ra element có id "container"
const container = document.getElementById("container");

// Mảng chứa dữ liệu các item (bạn có thể thay đổi dữ liệu này)
const items = [
    { text: "truyenqq", link: "https://truyenqqto.com" },
    { text: "Facebook", link: "https://www.facebook.com" },
    { text: "YouTube", link: "https://www.youtube.com" },
];

// Tạo các button và append vào container
items.forEach(item => {
    const button = document.createElement("button");
    button.textContent = item.text;

    // Tạo element image và append vào button
    const image = document.createElement("img");
    image.src = "http://www.google.com/s2/favicons?domain=" + item.link;
    button.appendChild(image);

    // Thêm sự kiện onclick để chuyển hướng
    button.onclick = function () {
        window.location.href = item.link;
    };

    container.appendChild(button);
});