---
title: "Comparing SSD and NVMe Technologies"
description: "The main goal of this post was to aid in selecting SSD, and NVMe drives during a Micro Center sale."
date: 2023-07-27
# image: ./cover-image.webp
# imageAlt: SSD NVME by Marc PEZIN.
---

The main goal of this post was to aid in selecting SSD, and NVMe drives during a Micro Center sale. But I'll try to give an overview of what to look for next time you find yourself in the same position.

## Storage Technologies

1. MLC V-NAND is the best option.
2. TLC is equivalent to V-NAND, and viceversa.
3. QLC is cheap but a _little_ less reliable.
4. 3D NAND is your basic entry point to SSDs.

### 3D NAND

- The most basic of modern SSD technologies. Great for throwing on cheap systems, home servers, anything non-critical really.
- It is not recommended to host your Operating System on 3D NAND, or QLC.

### Quad Level Cell (QLC)

- QLC (Quad Level Cell) is cheaper to manufacture than TLC (Triple Level Cell).
- QLC is much slower and less durable to constant writing than TLC.
- It is not recommended to host your Operating System on 3D NAND, or QLC.

### Triple Level Cell (TLC)

- TLC is more reliable when compared to QLC.
- MLC is a Triple Level Cell based Samsung technology.

### Multi Level Cell (MLC)

- MLC is a Triple Level Cell based Samsung technology.

## How Are SSDs Scored

### Storage

- 1 point per GB
  - Less accurate the bigger the SSD
  - 3 TB and higher drives scale exp/log instead of linearly.

### Price

Based on price per $1. Selected $0.10 as the baseline after averaging some calculations.

- 1 point for every $0.01 / GB below $0.10

### Technology Coefficient

- 3D NAND Coefficient = 0.5 (Big Penalty)
- QLC Coefficient = 0.75 (Small Penalty)
- TLC Coefficient = 1.0 (No Change)
- MLC V-NAND coefficient = 1.25 (Small Advantage)

## NVMe M.2 2280 M Key

<table>
  <thead>
    <tr>
      <th data-label="Brand">Brand</th>
      <th data-label="Storage">Storage</th>
      <th data-label="Price">Price</th>
      <th data-label="Notes">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Brand">970 EVO Plus</td>
      <td data-label="Storage">500 GB</td>
      <td data-label="Price">$35</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">970 EVO Plus</td>
      <td data-label="Storage">2 TB</td>
      <td data-label="Price">$100</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">970 EVO Plus</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$50</td>
      <td data-label="Notes">V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">980</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$50</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">980 Pro</td>
      <td data-label="Storage">2 TB</td>
      <td data-label="Price">$120</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">980 Pro</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$70</td>
      <td data-label="Notes">V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">990 PRO</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$80</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">Crucial P3</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$40</td>
      <td data-label="Notes">3D NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">Inland</td>
      <td data-label="Storage">500 GB</td>
      <td data-label="Price">$23</td>
      <td data-label="Notes">QLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Inland</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$40</td>
      <td data-label="Notes">QLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Inland</td>
      <td data-label="Storage">2 TB</td>
      <td data-label="Price">$70</td>
      <td data-label="Notes">QLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Performance</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$55</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Prime</td>
      <td data-label="Storage">500 GB</td>
      <td data-label="Price">$30</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Prime</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$50</td>
      <td data-label="Notes">TLC</td>
    </tr>
  </tbody>
</table>

## SSD

<table>
  <thead>
    <tr>
      <th data-label="Brand">Brand</th>
      <th data-label="Storage">Storage</th>
      <th data-label="Price">Price</th>
      <th data-label="Notes">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Brand">Inland</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$50</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Inland</td>
      <td data-label="Storage">512 GB</td>
      <td data-label="Price">$25</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Platinum</td>
      <td data-label="Storage">2 TB</td>
      <td data-label="Price">$80</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Platinum</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$43</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">Professional</td>
      <td data-label="Storage">256 GB</td>
      <td data-label="Price">$20</td>
      <td data-label="Notes">3D NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">Professional</td>
      <td data-label="Storage">125 GB</td>
      <td data-label="Price">$15</td>
      <td data-label="Notes">TLC</td>
    </tr>
    <tr>
      <td data-label="Brand">870 EVO</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$50</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">870 EVO</td>
      <td data-label="Storage">4 TB</td>
      <td data-label="Price">$220</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">870 EVO</td>
      <td data-label="Storage">500 GB</td>
      <td data-label="Price">$40</td>
      <td data-label="Notes">MLC V-NAND</td>
    </tr>
    <tr>
      <td data-label="Brand">870 QVO</td>
      <td data-label="Storage">1 TB</td>
      <td data-label="Price">$70</td>
      <td data-label="Notes">QLC V-NAND</td>
    </tr>
  </tbody>
</table>

## Final Scores

### NVMe

<table>
  <thead>
    <tr>
      <th data-label="Description">Description</th>
      <th data-label="$ / GB">$ / GB</th>
      <th data-label="Coef">Coef</th>
      <th data-label="Score">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Description">970 500 GB $35 MLC</td>
      <td data-label="$ / GB">0.070</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">629</td>
    </tr>
    <tr>
      <td data-label="Description">970 2 TB $100 MLC</td>
      <td data-label="$ / GB">0.050</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">2506</td>
    </tr>
    <tr>
      <td data-label="Description">970 1 TB $100 MLC</td>
      <td data-label="$ / GB">0.103</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">1250</td>
    </tr>
    <tr>
      <td data-label="Description">980 1 TB $50 V</td>
      <td data-label="$ / GB">0.050</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1005</td>
    </tr>
    <tr>
      <td data-label="Description">980P 2 TB $120 MLC</td>
      <td data-label="$ / GB">0.060</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">2505</td>
    </tr>
    <tr>
      <td data-label="Description">980P 1 TB $70 V</td>
      <td data-label="$ / GB">0.070</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1003</td>
    </tr>
    <tr>
      <td data-label="Description">990P 1 TB $80 MLC</td>
      <td data-label="$ / GB">0.080</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">1253</td>
    </tr>
    <tr>
      <td data-label="Description">Crucial 1 TB $40 3D</td>
      <td data-label="$ / GB">0.040</td>
      <td data-label="Coef">0.5</td>
      <td data-label="Score">503</td>
    </tr>
    <tr>
      <td data-label="Description">Inland 500 GB $23 QLC</td>
      <td data-label="$ / GB">0.046</td>
      <td data-label="Coef">0.75</td>
      <td data-label="Score">379</td>
    </tr>
    <tr>
      <td data-label="Description">Inland 1 TB $40 QLC</td>
      <td data-label="$ / GB">0.040</td>
      <td data-label="Coef">0.75</td>
      <td data-label="Score">755</td>
    </tr>
    <tr>
      <td data-label="Description">Inland 2 TB $70 QLC</td>
      <td data-label="$ / GB">0.035</td>
      <td data-label="Coef">0.75</td>
      <td data-label="Score">1505</td>
    </tr>
    <tr>
      <td data-label="Description">Performance 1 TB $55 TLC</td>
      <td data-label="$ / GB">0.055</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1005</td>
    </tr>
    <tr>
      <td data-label="Description">Prime 500 GB $30 TLC</td>
      <td data-label="$ / GB">0.060</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">504</td>
    </tr>
    <tr>
      <td data-label="Description">Prime 1 TB $50 TLC</td>
      <td data-label="$ / GB">0.050</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1005</td>
    </tr>
  </tbody>
</table>

\*_Higher is better._

### SSD

<table>
  <thead>
    <tr>
      <th data-label="Description">Description</th>
      <th data-label="$ / GB">$ / GB</th>
      <th data-label="Coef">Coef</th>
      <th data-label="Score">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Description">Inland 1TB $50 TLC</td>
      <td data-label="$ / GB">0.050</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1005</td>
    </tr>
    <tr>
      <td data-label="Description">Inland 512GB $25 TLC</td>
      <td data-label="$ / GB">0.049</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">517</td>
    </tr>
    <tr>
      <td data-label="Description">Platinum 2TB $80 TLC</td>
      <td data-label="$ / GB">0.040</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">2006</td>
    </tr>
    <tr>
      <td data-label="Description">Platinum 1TB $43 TLC</td>
      <td data-label="$ / GB">0.043</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1006</td>
    </tr>
    <tr>
      <td data-label="Description">Professional 256GB $20 3D</td>
      <td data-label="$ / GB">0.078</td>
      <td data-label="Coef">0.5</td>
      <td data-label="Score">129</td>
    </tr>
    <tr>
      <td data-label="Description">Professional 125GB $15 3D</td>
      <td data-label="$ / GB">0.120</td>
      <td data-label="Coef">0.5</td>
      <td data-label="Score">63</td>
    </tr>
    <tr>
      <td data-label="Description">970 500 GB $35 MLC</td>
      <td data-label="$ / GB">0.070</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">629</td>
    </tr>
    <tr>
      <td data-label="Description">970 2 TB $100 MLC</td>
      <td data-label="$ / GB">0.050</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">2506</td>
    </tr>
    <tr>
      <td data-label="Description">970 1 TB $100 MLC</td>
      <td data-label="$ / GB">0.103</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">1250</td>
    </tr>
    <tr>
      <td data-label="Description">980 1 TB $50 V</td>
      <td data-label="$ / GB">0.050</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1005</td>
    </tr>
    <tr>
      <td data-label="Description">980P 2 TB $120 MLC</td>
      <td data-label="$ / GB">0.060</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">2505</td>
    </tr>
    <tr>
      <td data-label="Description">980P 1 TB $70 V</td>
      <td data-label="$ / GB">0.070</td>
      <td data-label="Coef">1</td>
      <td data-label="Score">1003</td>
    </tr>
    <tr>
      <td data-label="Description">990P 1 TB $80 MLC</td>
      <td data-label="$ / GB">0.080</td>
      <td data-label="Coef">1.25</td>
      <td data-label="Score">1253</td>
    </tr>
  </tbody>
</table>

\*_Higher is better._

## Conclusions

- Cheap system? Get **any** of these.
- Secondary drive? Get any **QLC** or better.
- OS Drive? Get any **TLC** or better.
- Extra cash? Premium for reliability? Get any **Samsung** from the list.
