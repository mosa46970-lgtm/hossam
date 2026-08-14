import os
import pymupdf

pdf_dir = r"c:\Users\h\Desktop\portfolio\Portfolio_Hossam\hossam-portfolio\public\pdf"
out_dir = r"c:\Users\h\Desktop\portfolio\Portfolio_Hossam\hossam-portfolio\public\pdf_previews"
os.makedirs(out_dir, exist_ok=True)

pdf_files = [f for f in os.listdir(pdf_dir) if f.endswith('.pdf')]
print(f"Converting {len(pdf_files)} PDF files to HD images...")

for f in pdf_files:
    pdf_path = os.path.join(pdf_dir, f)
    base_name = os.path.splitext(f)[0]
    out_path = os.path.join(out_dir, f"{base_name}.jpg")
    try:
        doc = pymupdf.open(pdf_path)
        if len(doc) > 0:
            page = doc[0]
            # Render at 180 DPI for crisp CAD drawing details
            mat = pymupdf.Matrix(2.2, 2.2)
            pix = page.get_pixmap(matrix=mat, alpha=False)
            pix.save(out_path, "jpeg", jpg_quality=88)
            kb = os.path.getsize(out_path) / 1024
            print(f"[OK] {f} -> {base_name}.jpg ({kb:.1f} KB)")
        doc.close()
    except Exception as e:
        print(f"[ERROR] Failed {f}: {e}")

print("All PDF previews generated successfully!")
