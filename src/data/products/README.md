# LFADJ Product Data Read Layer

## Purpose

This folder is the website product data read layer only.

## SSOT Product Database

`E:\260611隆发商业平台\LFADJ_Global_AI_Business_OS\Assets\LFADJ_Global_Digital_Asset_Center\01_Product_Data\`

## Website Read Layer

`E:\LFADJ\lfadj-website\src\data\products\`

## Rules

1. The SSOT Assets folder is the only real product database.

2. `src/data/products` is only the website read layer / adapter layer.

3. Do not create duplicate product databases in random folders.

4. Do not move or delete files inside the SSOT Assets folder.

5. Do not invent technical parameters.

6. Missing or unconfirmed data must be shown as `To be confirmed`.

7. Product pages must read from `src/data/products` instead of hardcoding specs inside `page.tsx`.

8. New product data files should follow `lf6130.ts` structure.
