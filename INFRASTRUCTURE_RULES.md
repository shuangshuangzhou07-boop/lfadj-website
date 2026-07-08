# LFADJ Website Infrastructure Rules

## Website Location

Website is currently located at:

`E:\LFADJ\lfadj-website\`

## Website Product Read Layer

Website reads product data from:

`E:\LFADJ\lfadj-website\src\data\products\`

## Real Product Database

The real product database is not inside the website.

The real product database is:

`E:\260611隆发商业平台\LFADJ_Global_AI_Business_OS\Assets\LFADJ_Global_Digital_Asset_Center\01_Product_Data\`

## Rules

1. Do not create duplicate product data folders.

2. Do not move the website yet.

3. Do not invent missing product data.

4. Missing or unconfirmed product data must be written exactly as `To be confirmed`.

5. `src/data/products` is only the website read layer / adapter layer.

6. Product pages should read from `src/data/products` instead of hardcoding specifications inside `page.tsx`.

7. The SSOT Assets folder remains the only real product database.

8. Do not modify website routes unless a future task explicitly requests route changes.
