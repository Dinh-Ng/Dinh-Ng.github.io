// Lấy ra element có id "container"
const container = document.getElementById("container");

// Mảng chứa dữ liệu các item (bạn có thể thay đổi dữ liệu này)
const items = [
    { image: "image1.jpg", text: "Google", link: "https://www.google.com" },
    { image: "image2.jpg", text: "Facebook", link: "https://www.facebook.com" },
    { image: "image3.jpg", text: "YouTube", link: "https://www.youtube.com" },
];

// Tạo các button và append vào container
items.forEach(item => {
    const button = document.createElement("button");
    button.textContent = item.text;

    // Tạo element image và append vào button
    const image = document.createElement("img");
    image.src = item.image;
    button.appendChild(image);

    // Thêm sự kiện onclick để chuyển hướng
    button.onclick = function() {
        window.location.href = item.link;
    };

    container.appendChild(button);
});