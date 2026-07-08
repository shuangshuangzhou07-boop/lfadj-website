# LFADJ Product Database Path Rules V2.1

## Absolute Paths

PHYSICAL BUSINESS ROOT:

`E:\260611隆发商业平台\`

BUSINESS OS ROOT:

`E:\260611隆发商业平台\LFADJ_Global_AI_Business_OS\`

SSOT PRODUCT DATA ROOT:

`E:\260611隆发商业平台\LFADJ_Global_AI_Business_OS\Assets\LFADJ_Global_Digital_Asset_Center\01_Product_Data\`

WEBSITE READ LAYER:

`E:\LFADJ\lfadj-website\src\data\products\`

## Absolute Rule

Never treat `E:\LFADJ\lfadj-website\src\data\products\` as the real product database.

It is only the website read layer.

The real database is always:

`E:\260611隆发商业平台\LFADJ_Global_AI_Business_OS\Assets\LFADJ_Global_Digital_Asset_Center\01_Product_Data\`

## Rules

- The SSOT Assets folder is the only real product database.
- `src/data/products/` is only a website read layer / adapter layer.
- Codex must never create product data under random folders.
- Codex must never treat `src/data/products/` as the real database.
- Website pages may read structured data from `src/data/products/`, but this layer must mirror or reference the SSOT product data.
- Do not move or delete files inside the SSOT Assets folder.
- Missing or unconfirmed data must be written as `To be confirmed`.
- Never invent technical parameters, engine data, lamp power, dimensions, runtime, certification, alternator data, fuel tank capacity, noise level, shipping information, or application claims.
