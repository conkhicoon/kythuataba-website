# CLAUDE.md – Website Công ty TNHH Kỹ thuật ABA

## Người dùng và cách làm việc
- Chủ web không phải lập trình viên, giao tiếp **bằng tiếng Việt**. Trả lời tiếng Việt, ngắn gọn, giải thích từng bước.
- Quy trình đã thống nhất: **sửa và cho xem trước (Artifact), chưa đóng gói/commit/đẩy GitHub** cho đến khi người dùng nhắn rõ "đưa lên".
- **Mọi chỉnh sửa phải dàn trang phù hợp cả máy tính (web) và điện thoại.** Kiểm tra ít nhất ở 320, 360, 390, 768, 1280px: không tràn ngang, chữ không bị cắt, nút bấm đủ lớn.
- Người dùng hay gửi ảnh chụp màn hình; khi hướng dẫn thao tác trên giao diện, ưu tiên mô tả kèm vị trí nút.
- Không nhận mật khẩu hay tài khoản của người dùng.

## Công ty
- Công ty TNHH Kỹ thuật ABA, phân phối vật liệu làm kín công nghiệp (phớt, gioăng thủy lực).
- Địa chỉ (dùng đúng một cách viết ở mọi nơi): Số 2 phố Ái Mộ, Tổ 8 Phường Bồ Đề, Thành Phố Hà Nội
- Điện thoại: 024.3873.8055 / 024.3873.8058. Call/Zalo: 0984.439.151. Email: namktaba@gmail.com (chỉ dùng Gmail).
- Đại lý ủy quyền: NOK (chứng thư ghi rõ không gồm mảng ô tô; dòng này đã bỏ khỏi web theo ý chủ web), Freudenberg, Trelleborg, NAK (chưa có ảnh chứng thư NAK).
- Tên miền: kythuataba.vn, DNS đang ở VNPT, đang chạy WordPress (theme Flatsome).
- Web WordPress cũ **đã bị chèn link cờ bạc ẩn** (casino) trong đoạn giới thiệu. Không được chép các link đó sang web mới; cần nhắc dọn mã độc và sao lưu sạch trước khi gắn tên miền.

## Cấu trúc dự án
Website tĩnh HTML/CSS/JS thuần, không build. **Một trang dài** (`public/index.html`), các mục xếp từ trên xuống: Giới thiệu (`#gioi-thieu`) → Chứng thư (`#chung-thu`) → Sản phẩm (`#san-pham`) → Tư vấn kỹ thuật + Từ khóa (`#tu-van`) → Liên hệ + form báo giá (`#lien-he`).
- Mục Tư vấn kỹ thuật không có dòng giới thiệu dưới tiêu đề. "Từ khóa" là tiêu đề cùng cỡ với "Tư vấn kỹ thuật", bên dưới là **một khung duy nhất** (class `kwbox`) chứa 17 nhóm danh mục do chủ web cung cấp (tên nhóm viết hoa, tên tiếng Anh, các loại con). Dãy từ khóa ngắn cũ và chữ "Bao gồm:" đã bỏ.
- Mục Liên hệ: hai khung cùng chiều cao (form báo giá | Thông tin liên hệ có tên công ty màu xanh, các dòng địa chỉ, điện thoại, Call/Zalo, email chia đều).
- `public/404.html`, `public/css/style.css`, `public/js/main.js` (lightbox chứng thư, tô mục menu khi cuộn, form `mailto:`).
- `public/images/`: `aba-logo.png` (logo trong suốt, dùng trên menu), `aba-logo.jpg` (logo nền trắng, dùng cho og:image), ảnh chứng thư, ảnh sản phẩm `aba-sp-*.jpg` (thẻ đang dùng: 10, 5, 8, 9, 7; ảnh 1, 2, 3, 4, 6 hiện không hiển thị).
- `sitemap.xml` (chỉ còn trang `/`), `robots.txt`, `_headers`, `_redirects` (đưa `/chung-thu`, `/san-pham`, `/tu-van-ky-thuat`, `/lien-he` về mục tương ứng; chưa thử trên Cloudflare).
- HTML từng được sinh bằng script ngoài kho; từ nay **sửa thẳng** `public/index.html` và `public/css/style.css`.

## Giao diện đã chốt
- Bám nhận diện web cũ: thanh menu xanh dương, nút cam (#f58220), banner navy; logo ABA màu #00b0f0.
- **Thanh menu duy nhất** (không còn header trắng): logo = nút "Trang chủ" đứng đầu, rồi 5 mục (Giới thiệu, Chứng thư, Sản phẩm, Tư vấn kỹ thuật, Liên hệ), cuối thanh là "Hỗ trợ liên hệ: 024.3873.8055 / 8058" và "Call/Zalo: 0984.439.151". Máy tính: thanh dính đầu màn hình. Điện thoại: hàng trên là logo + số điện thoại, hàng dưới là menu, không dính.
- Thang cỡ chữ gồm 6 bậc (biến `--fs-xs/sm/base/lg/xl/2xl` trong CSS). Không đặt cỡ chữ lẻ ngoài thang.
- Banner Giới thiệu: đoạn giới thiệu do người dùng viết + khung "Đại lý ủy quyền" (tên NOK, Freudenberg, Trelleborg bấm được ra web hãng; NAK chưa có link). Chữ "không gồm mảng ô tô" đã bỏ hoàn toàn khỏi web.
- Dải số liệu: ≈ 10.000 size tồn kho / >10 hãng kinh doanh / Từ 2012 Kinh nghiệm (người dùng đã chốt giữ nguyên).
- Không có nút "Yêu cầu báo giá" nào ngoài form ở mục Liên hệ; không có ô tìm kiếm; không có mục "Hình ảnh" riêng.
- Không dùng thư viện ngoài, không dùng font tải từ ngoài (dùng font hệ thống); ảnh phải nằm trong `images/`.
- Giữ chữ tiếng Việt có dấu.

## Triển khai
- Repo GitHub: `conkhicoon/kythuataba-website` (public). Cloudflare đã nối repo, **tự deploy khi có commit lên nhánh main**.
- Dự án dạng **Workers (static assets)**, không phải Pages. Thư mục xuất bản là `public`. Địa chỉ thử: `https://kythuataba-website.ngochung-ktaba.workers.dev`.
- Ngày 27/10/2026: web một trang dài đã đưa lên nhánh `main` (đợt 1 dựng lại toàn bộ, đợt 2 cập nhật Từ khóa, Liên hệ). Cần kiểm tra lại web thử trên workers.dev và các địa chỉ chuyển hướng `_redirects`.
- Chưa gắn tên miền. Kế hoạch: thêm kythuataba.vn vào Cloudflare, đổi nameserver ở VNPT sang Cloudflare, xóa bản ghi A/CNAME cũ trỏ vào hosting WordPress, rồi Settings → Domains & Routes → Add → Custom Domain cho `kythuataba.vn` và `www`. **Trước khi gắn tên miền phải sao lưu WordPress.**
- `_headers` đặt ảnh `immutable` 1 năm: khi đổi ảnh **phải đổi tên file** (không ghi đè cùng tên), nếu không khách cũ vẫn thấy ảnh cũ.
- README.md còn ghi "Cloudflare Pages" và cấu trúc nhiều trang, cần sửa lại khi đưa lên.

## Việc đang chờ / cần hỏi người dùng
1. Ảnh banner gốc "NOK Seal Business" của web cũ (chưa nhận).
2. Danh sách sản phẩm chi tiết (WooCommerce hoặc ảnh chụp) nếu muốn mở rộng mục Sản phẩm.
3. Thư ủy quyền Trelleborg ghi "ABA Nipponese Co., Ltd" ở thân thư nhưng "ABA Technology Co., Ltd" ở phần địa chỉ: nhắc đối chiếu với hãng.
4. Form báo giá đang dùng `mailto:`: khách không có phần mềm email sẽ không gửi được. Cân nhắc Cloudflare Worker hoặc dịch vụ form.
5. Link NAK (`http://www.nak.com.tw`), fax 024.387 380 77, Skype, email liên hệ của hãng: chưa đưa lên web; chờ người dùng quyết.
6. Logo gốc dạng vector (.svg/.ai/.pdf) hoặc ảnh lớn: logo hiện được phóng từ ảnh 170px nên chưa thật nét.
7. Biểu tượng tab trình duyệt (`favicon.svg`) vẫn màu xanh đậm cũ; hỏi có đổi sang #00b0f0 không.
8. Đoạn giới thiệu liệt kê National, SKF, Parker, KYB… cạnh 4 hãng có chứng thư (theo ý người dùng): có thể khiến khách hiểu tất cả là đại lý ủy quyền.
