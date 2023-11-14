// authController.js

// Xử lý logic đăng ký người dùng
exports.register = (req, res) => {
    // Hiển thị nội dung của yêu cầu POST (thường là dữ liệu từ form)
    console.log(req.body);

    // Gửi phản hồi về người dùng, trong trường hợp này, chỉ là thông báo đơn giản
    res.send('Form Submitted');
};
