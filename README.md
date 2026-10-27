# Website Công ty TNHH Kỹ thuật ABA

Website tĩnh (HTML/CSS/JS thuần), không cần cài đặt hay build. Toàn bộ website nằm trong thư mục `public/`. Đây là **một trang dài**, các mục xếp từ trên xuống dưới và menu cuộn tới từng mục.

## Cấu trúc
- `public/index.html` Trang chính, gồm các mục: Giới thiệu, Chứng thư, Sản phẩm, Tư vấn kỹ thuật (kèm Từ khóa), Liên hệ (kèm form báo giá)
- `public/404.html` Trang báo không tìm thấy
- `public/css/style.css` Giao diện. Màu sắc và thang cỡ chữ (`--fs-xs` đến `--fs-2xl`) ở đầu file
- `public/js/main.js` Xem ảnh chứng thư phóng to, tô sáng mục menu khi cuộn, form báo giá (gửi qua email)
- `public/images/` Ảnh. Logo trên menu là `aba-logo.png` (nền trong suốt)
- `public/_redirects` Đưa các địa chỉ cũ (`/lien-he`, `/san-pham`…) về đúng mục trên trang chính
- `public/sitemap.xml`, `public/robots.txt`, `public/_headers`

## Xem thử trên máy
Mở file `public/index.html` bằng trình duyệt.

## Sửa nội dung
Mở `public/index.html` bằng Notepad hoặc VS Code, sửa chữ, lưu lại, rồi đẩy lên GitHub. Cloudflare tự cập nhật sau khoảng 1 phút.
- Thông tin công ty (địa chỉ, điện thoại, email, Call/Zalo) nằm ở thanh menu, mục Liên hệ và chân trang.
- Ảnh đặt trong `public/images/`. Khi thay ảnh, **hãy đặt tên file mới** (ví dụ `aba-sp-11.jpg`), vì trình duyệt giữ ảnh cũ trong 1 năm nếu tên file không đổi.

## Triển khai trên Cloudflare (Workers, static assets)
- Repo GitHub nối với Cloudflare, tự triển khai khi có commit lên nhánh `main`.
- Thư mục xuất bản (assets directory): `public`
- Không cần build command.

## Việc cần làm khi đưa lên thật
- Gắn tên miền `kythuataba.vn` vào Cloudflare (sao lưu WordPress cũ trước).
- Đổi tên miền trong `public/sitemap.xml`, `public/robots.txt` và thẻ canonical nếu dùng tên miền khác.
- Form báo giá hiện mở phần mềm email của khách (mailto). Muốn nhận trực tiếp, dùng Cloudflare Worker hoặc dịch vụ form như Formspree.
