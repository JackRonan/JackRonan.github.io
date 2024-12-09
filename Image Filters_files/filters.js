function RANGE(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const cc_matrix = [
  [1838, -1167, 353],
  [-370, 1671, -277],
  [43, -706, 1686]
];

const inv_cc_matrix_double = [
  [0.64357107, 0.42180948, -0.06544446],
  [0.15020800, 0.75696674, 0.09291599],
  [0.04648475, 0.30621632, 0.64793167]
];

const gamma_table = [
  0x0000, 0x0040, 0x00A9, 0x012A, 0x01BE, 0x0262, 0x0314, 0x03D2, 0x049B, 0x056E, 0x064B, 0x0732, 0x0820, 0x0917, 0x0A15, 0x0B1B,
  0x0C28, 0x0D3C, 0x0E56, 0x0F86, 0x10A4, 0x11C1, 0x12DA, 0x13F1, 0x1506, 0x1619, 0x172A, 0x1838, 0x1944, 0x1A4E, 0x1B56, 0x1C5C,
  0x1D60, 0x1E62, 0x1F62, 0x2061, 0x215E, 0x2259, 0x2352, 0x2449, 0x253F, 0x2634, 0x2727, 0x2818, 0x2908, 0x29F7, 0x2AE4, 0x2BD0,
  0x2CBA, 0x2DA3, 0x2E8B, 0x2F71, 0x3057, 0x3139, 0x321A, 0x32F7, 0x33D2, 0x34AB, 0x3582, 0x3656, 0x3728, 0x37F8, 0x38C5, 0x3991,
  0x3A5B, 0x3B22, 0x3BE8, 0x3CAC, 0x3D6E, 0x3E2E, 0x3EED, 0x3FAA, 0x4065, 0x411F, 0x41D7, 0x428D, 0x4342, 0x43F5, 0x44A7, 0x4558,
  0x4607, 0x46B5, 0x4761, 0x480C, 0x48B6, 0x495E, 0x4A06, 0x4AAC, 0x4B50, 0x4BF4, 0x4C96, 0x4D37, 0x4DD8, 0x4E77, 0x4F14, 0x4FB1,
  0x504D, 0x50E8, 0x5181, 0x521A, 0x52B2, 0x5348, 0x53DE, 0x5473, 0x5507, 0x559A, 0x562C, 0x56BD, 0x574D, 0x57DD, 0x586B, 0x58F9,
  0x5986, 0x5A12, 0x5A9D, 0x5B27, 0x5BB1, 0x5C3A, 0x5CC2, 0x5D49, 0x5DD0, 0x5E56, 0x5EDB, 0x5F5F, 0x5FE3, 0x6066, 0x60E8, 0x616A,
  0x61EB, 0x626B, 0x62EA, 0x6369, 0x63E8, 0x6465, 0x64E2, 0x655F, 0x65DA, 0x6656, 0x66D0, 0x674A, 0x67C3, 0x683C, 0x68B4, 0x692C,
  0x69A3, 0x6A1A, 0x6A90, 0x6B05, 0x6B7A, 0x6BEE, 0x6C62, 0x6CD5, 0x6D48, 0x6DBA, 0x6E2C, 0x6E9D, 0x6F0E, 0x6F7E, 0x6FEE, 0x705D,
  0x70CC, 0x713B, 0x71A8, 0x7216, 0x7283, 0x72EF, 0x735B, 0x73C7, 0x7432, 0x749D, 0x7507, 0x7571, 0x75DA, 0x7643, 0x76AB, 0x7714,
  0x777B, 0x77E3, 0x7849, 0x78B0, 0x7916, 0x797C, 0x79E1, 0x7A46, 0x7AAA, 0x7B0E, 0x7B72, 0x7BD6, 0x7C39, 0x7C9B, 0x7CFD, 0x7D5F,
  0x7DC1, 0x7E22, 0x7E83, 0x7EE3, 0x7F43, 0x7FA3, 0x8002, 0x8061, 0x80C0, 0x811F, 0x817D, 0x81DA, 0x8238, 0x8295, 0x82F1, 0x834E,
  0x83AA, 0x8406, 0x8461, 0x84BC, 0x8517, 0x8572, 0x85CC, 0x8626, 0x867F, 0x86D9, 0x8732, 0x878A, 0x87E3, 0x883B, 0x8893, 0x88EA,
  0x8941, 0x8998, 0x89EF, 0x8A45, 0x8A9B, 0x8AF1, 0x8B47, 0x8B9C, 0x8BF1, 0x8C46, 0x8C9A, 0x8CEE, 0x8D42, 0x8D96, 0x8DE9, 0x8E3D,
  0x8E90, 0x8EE2, 0x8F35, 0x8F87, 0x8FD9, 0x902A, 0x907C, 0x90CD, 0x911E, 0x916E, 0x91BF, 0x920F, 0x925F, 0x92AE, 0x92FE, 0x934D,
  0x939C, 0x93EB, 0x9439, 0x9487, 0x94D5, 0x9523, 0x9571, 0x95BE, 0x960B, 0x9658, 0x96A5, 0x96F1, 0x973E, 0x978A, 0x97D5, 0x9821,
  0x986C, 0x98B8, 0x9903, 0x994D, 0x9998, 0x99E2, 0x9A2C, 0x9A76, 0x9AC0, 0x9B09, 0x9B53, 0x9B9C, 0x9BE5, 0x9C2D, 0x9C76, 0x9CBE,
  0x9D06, 0x9D4E, 0x9D96, 0x9DDD, 0x9E25, 0x9E6C, 0x9EB3, 0x9EFA, 0x9F40, 0x9F86, 0x9FCD, 0xA013, 0xA058, 0xA09E, 0xA0E4, 0xA129,
  0xA16E, 0xA1B3, 0xA1F8, 0xA23C, 0xA280, 0xA2C5, 0xA309, 0xA34C, 0xA390, 0xA3D4, 0xA417, 0xA45A, 0xA49D, 0xA4E0, 0xA522, 0xA565,
  0xA5A7, 0xA5E9, 0xA62B, 0xA66D, 0xA6AF, 0xA6F0, 0xA731, 0xA772, 0xA7B3, 0xA7F4, 0xA835, 0xA875, 0xA8B6, 0xA8F6, 0xA936, 0xA976,
  0xA9B5, 0xA9F5, 0xAA34, 0xAA74, 0xAAB3, 0xAAF1, 0xAB30, 0xAB6F, 0xABAD, 0xABEC, 0xAC2A, 0xAC68, 0xACA6, 0xACE3, 0xAD21, 0xAD5E,
  0xAD9C, 0xADD9, 0xAE16, 0xAE52, 0xAE8F, 0xAECC, 0xAF08, 0xAF44, 0xAF80, 0xAFBC, 0xAFF8, 0xB034, 0xB06F, 0xB0AB, 0xB0E6, 0xB121,
  0xB15C, 0xB197, 0xB1D2, 0xB20C, 0xB247, 0xB281, 0xB2BB, 0xB2F5, 0xB32F, 0xB369, 0xB3A3, 0xB3DC, 0xB416, 0xB44F, 0xB488, 0xB4C1,
  0xB4FA, 0xB532, 0xB56B, 0xB5A4, 0xB5DC, 0xB614, 0xB64C, 0xB684, 0xB6BC, 0xB6F4, 0xB72B, 0xB763, 0xB79A, 0xB7D1, 0xB808, 0xB83F,
  0xB876, 0xB8AD, 0xB8E3, 0xB91A, 0xB950, 0xB986, 0xB9BD, 0xB9F3, 0xBA28, 0xBA5E, 0xBA94, 0xBAC9, 0xBAFF, 0xBB34, 0xBB69, 0xBB9E,
  0xBBD3, 0xBC08, 0xBC3D, 0xBC71, 0xBCA6, 0xBCDA, 0xBD0E, 0xBD43, 0xBD77, 0xBDAA, 0xBDDE, 0xBE12, 0xBE45, 0xBE79, 0xBEAC, 0xBEE0,
  0xBF13, 0xBF46, 0xBF79, 0xBFAB, 0xBFDE, 0xC011, 0xC043, 0xC075, 0xC0A8, 0xC0DA, 0xC10C, 0xC13E, 0xC170, 0xC1A1, 0xC1D3, 0xC205,
  0xC236, 0xC267, 0xC298, 0xC2CA, 0xC2FB, 0xC32B, 0xC35C, 0xC38D, 0xC3BE, 0xC3EE, 0xC41E, 0xC44F, 0xC47F, 0xC4AF, 0xC4DF, 0xC50F,
  0xC53F, 0xC56E, 0xC59E, 0xC5CD, 0xC5FD, 0xC62C, 0xC65B, 0xC68A, 0xC6B9, 0xC6E8, 0xC717, 0xC745, 0xC774, 0xC7A3, 0xC7D1, 0xC7FF,
  0xC82D, 0xC85C, 0xC88A, 0xC8B8, 0xC8E5, 0xC913, 0xC941, 0xC96E, 0xC99C, 0xC9C9, 0xC9F6, 0xCA24, 0xCA51, 0xCA7E, 0xCAAA, 0xCAD7,
  0xCB04, 0xCB31, 0xCB5D, 0xCB8A, 0xCBB6, 0xCBE2, 0xCC0E, 0xCC3A, 0xCC66, 0xCC92, 0xCCBE, 0xCCEA, 0xCD15, 0xCD41, 0xCD6C, 0xCD98,
  0xCDC3, 0xCDEE, 0xCE19, 0xCE44, 0xCE6F, 0xCE9A, 0xCEC5, 0xCEF0, 0xCF1A, 0xCF45, 0xCF6F, 0xCF99, 0xCFC4, 0xCFEE, 0xD018, 0xD042,
  0xD06C, 0xD095, 0xD0BF, 0xD0E9, 0xD112, 0xD13C, 0xD165, 0xD18F, 0xD1B8, 0xD1E1, 0xD20A, 0xD233, 0xD25C, 0xD285, 0xD2AD, 0xD2D6,
  0xD2FE, 0xD327, 0xD34F, 0xD378, 0xD3A0, 0xD3C8, 0xD3F0, 0xD418, 0xD440, 0xD468, 0xD490, 0xD4B7, 0xD4DF, 0xD506, 0xD52E, 0xD555,
  0xD57C, 0xD5A4, 0xD5CB, 0xD5F2, 0xD619, 0xD640, 0xD666, 0xD68D, 0xD6B4, 0xD6DA, 0xD701, 0xD727, 0xD74E, 0xD774, 0xD79A, 0xD7C0,
  0xD7E6, 0xD80C, 0xD832, 0xD858, 0xD87E, 0xD8A3, 0xD8C9, 0xD8EE, 0xD914, 0xD939, 0xD95E, 0xD983, 0xD9A9, 0xD9CE, 0xD9F3, 0xDA18,
  0xDA3C, 0xDA61, 0xDA86, 0xDAAA, 0xDACF, 0xDAF3, 0xDB18, 0xDB3C, 0xDB60, 0xDB84, 0xDBA8, 0xDBCD, 0xDBF0, 0xDC14, 0xDC38, 0xDC5C,
  0xDC7F, 0xDCA3, 0xDCC7, 0xDCEA, 0xDD0D, 0xDD31, 0xDD54, 0xDD77, 0xDD9A, 0xDDBD, 0xDDE0, 0xDE03, 0xDE26, 0xDE48, 0xDE6B, 0xDE8E,
  0xDEB0, 0xDED3, 0xDEF5, 0xDF17, 0xDF3A, 0xDF5C, 0xDF7E, 0xDFA0, 0xDFC2, 0xDFE4, 0xE005, 0xE027, 0xE049, 0xE06B, 0xE08C, 0xE0AE,
  0xE0CF, 0xE0F0, 0xE112, 0xE133, 0xE154, 0xE175, 0xE196, 0xE1B7, 0xE1D8, 0xE1F8, 0xE219, 0xE23A, 0xE25A, 0xE27B, 0xE29B, 0xE2BC,
  0xE2DC, 0xE2FC, 0xE31D, 0xE33D, 0xE35D, 0xE37D, 0xE39D, 0xE3BC, 0xE3DC, 0xE3FC, 0xE41C, 0xE43B, 0xE45B, 0xE47A, 0xE49A, 0xE4B9,
  0xE4D8, 0xE4F7, 0xE516, 0xE535, 0xE554, 0xE573, 0xE592, 0xE5B1, 0xE5D0, 0xE5EE, 0xE60D, 0xE62C, 0xE64A, 0xE668, 0xE687, 0xE6A5,
  0xE6C3, 0xE6E1, 0xE700, 0xE71E, 0xE73C, 0xE759, 0xE777, 0xE795, 0xE7B3, 0xE7D0, 0xE7EE, 0xE80B, 0xE829, 0xE846, 0xE864, 0xE881,
  0xE89E, 0xE8BB, 0xE8D8, 0xE8F5, 0xE912, 0xE92F, 0xE94C, 0xE969, 0xE985, 0xE9A2, 0xE9BF, 0xE9DB, 0xE9F7, 0xEA14, 0xEA30, 0xEA4C,
  0xEA69, 0xEA85, 0xEAA1, 0xEABD, 0xEAD9, 0xEAF5, 0xEB10, 0xEB2C, 0xEB48, 0xEB63, 0xEB7F, 0xEB9A, 0xEBB6, 0xEBD1, 0xEBED, 0xEC08,
  0xEC23, 0xEC3E, 0xEC59, 0xEC74, 0xEC8F, 0xECAA, 0xECC5, 0xECE0, 0xECFA, 0xED15, 0xED30, 0xED4A, 0xED65, 0xED7F, 0xED99, 0xEDB4,
  0xEDCE, 0xEDE8, 0xEE02, 0xEE1C, 0xEE36, 0xEE50, 0xEE6A, 0xEE83, 0xEE9D, 0xEEB7, 0xEED0, 0xEEEA, 0xEF03, 0xEF1D, 0xEF36, 0xEF50,
  0xEF69, 0xEF82, 0xEF9B, 0xEFB4, 0xEFCD, 0xEFE6, 0xEFFF, 0xF018, 0xF030, 0xF049, 0xF062, 0xF07A, 0xF093, 0xF0AB, 0xF0C4, 0xF0DC,
  0xF0F4, 0xF10C, 0xF125, 0xF13D, 0xF155, 0xF16D, 0xF184, 0xF19C, 0xF1B4, 0xF1CC, 0xF1E3, 0xF1FB, 0xF213, 0xF22A, 0xF241, 0xF259,
  0xF270, 0xF287, 0xF29F, 0xF2B6, 0xF2CD, 0xF2E4, 0xF2FB, 0xF311, 0xF328, 0xF33F, 0xF356, 0xF36C, 0xF383, 0xF399, 0xF3B0, 0xF3C6,
  0xF3DD, 0xF3F3, 0xF409, 0xF41F, 0xF435, 0xF44B, 0xF461, 0xF477, 0xF48D, 0xF4A3, 0xF4B8, 0xF4CE, 0xF4E4, 0xF4F9, 0xF50F, 0xF524,
  0xF539, 0xF54F, 0xF564, 0xF579, 0xF58E, 0xF5A3, 0xF5B8, 0xF5CD, 0xF5E2, 0xF5F7, 0xF60C, 0xF620, 0xF635, 0xF649, 0xF65E, 0xF672,
  0xF687, 0xF69B, 0xF6AF, 0xF6C3, 0xF6D7, 0xF6EC, 0xF700, 0xF713, 0xF727, 0xF73B, 0xF74F, 0xF763, 0xF776, 0xF78A, 0xF79D, 0xF7B1,
  0xF7C4, 0xF7D7, 0xF7EB, 0xF7FE, 0xF811, 0xF824, 0xF837, 0xF84A, 0xF85D, 0xF86F, 0xF882, 0xF895, 0xF8A7, 0xF8BA, 0xF8CC, 0xF8DF,
  0xF8F1, 0xF904, 0xF916, 0xF928, 0xF93A, 0xF94C, 0xF95E, 0xF970, 0xF982, 0xF993, 0xF9A5, 0xF9B7, 0xF9C8, 0xF9DA, 0xF9EB, 0xF9FD,
  0xFA0E, 0xFA1F, 0xFA30, 0xFA41, 0xFA52, 0xFA63, 0xFA74, 0xFA85, 0xFA96, 0xFAA7, 0xFAB7, 0xFAC8, 0xFAD8, 0xFAE9, 0xFAF9, 0xFB09,
  0xFB1A, 0xFB2A, 0xFB3A, 0xFB4A, 0xFB5A, 0xFB6A, 0xFB79, 0xFB89, 0xFB99, 0xFBA8, 0xFBB8, 0xFBC7, 0xFBD7, 0xFBE6, 0xFBF5, 0xFC04,
  0xFC13, 0xFC22, 0xFC31, 0xFC40, 0xFC4F, 0xFC5E, 0xFC6C, 0xFC7B, 0xFC89, 0xFC98, 0xFCA6, 0xFCB4, 0xFCC2, 0xFCD1, 0xFCDF, 0xFCEC,
  0xFCFA, 0xFD08, 0xFD16, 0xFD23, 0xFD31, 0xFD3E, 0xFD4C, 0xFD59, 0xFD66, 0xFD74, 0xFD81, 0xFD8E, 0xFD9A, 0xFDA7, 0xFDB4, 0xFDC1,
  0xFDCD, 0xFDDA, 0xFDE6, 0xFDF2, 0xFDFE, 0xFE0B, 0xFE17, 0xFE23, 0xFE2E, 0xFE3A, 0xFE46, 0xFE51, 0xFE5D, 0xFE68, 0xFE73, 0xFE7F,
  0xFE8A, 0xFE95, 0xFE9F, 0xFEAA, 0xFEB5, 0xFEBF, 0xFECA, 0xFED4, 0xFEDF, 0xFEE9, 0xFEF3, 0xFEFD, 0xFF06, 0xFF10, 0xFF1A, 0xFF23,
  0xFF2C, 0xFF36, 0xFF3F, 0xFF48, 0xFF51, 0xFF59, 0xFF62, 0xFF6A, 0xFF73, 0xFF7B, 0xFF83, 0xFF8B, 0xFF92, 0xFF9A, 0xFFA1, 0xFFA8,
  0xFFAF, 0xFFB6, 0xFFBD, 0xFFC3, 0xFFCA, 0xFFD0, 0xFFD6, 0xFFDB, 0xFFE1, 0xFFE6, 0xFFEB, 0xFFEF, 0xFFF3, 0xFFF7, 0xFFFA, 0xFFFD
];

function applyMatrix(pixels, width, height, matrix) {
  const size = width * height * 4; // 4 channels (RGBA)

  for (let i = 0; i < size; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const newR = matrix[0][0] * r + matrix[0][1] * g + matrix[0][2] * b;
    const newG = matrix[1][0] * r + matrix[1][1] * g + matrix[1][2] * b;
    const newB = matrix[2][0] * r + matrix[2][1] * g + matrix[2][2] * b;

    pixels[i] = RANGE(newR, 0, 255);
    pixels[i + 1] = RANGE(newG, 0, 255);
    pixels[i + 2] = RANGE(newB, 0, 255);
  }
}

function applyGammaTableRGBA(bufRGBA, width, height, gammaTable) {
  const totalPixels = width * height * 4;

  for (let index = 0; index < totalPixels; index += 4) {
    for (let channel = 0; channel < 3; channel++) {
      const value = bufRGBA[index + channel];
      const gammaIndex = Math.floor((value * 1023) / 255);
      const adjustedValue = (gammaTable[gammaIndex] >> 8) & 0xFF;
      bufRGBA[index + channel] = adjustedValue;
    }
  }
}
function applyInverseGammaTableRGBA(bufRGBA, width, height, gammaTable) {
  const totalPixels = width * height * 4;

  for (let index = 0; index < totalPixels; index += 4) {
    for (let channel = 0; channel < 3; channel++) {
      const value = bufRGBA[index + channel];

      let left = 0;
      let right = 1023;
      let closestIndex = 0;
      let minDifference = 0xFFFF;

      while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const gammaValue = gammaTable[mid] >> 8;

        const difference = Math.abs(gammaValue - value);
        if (difference < minDifference) {
          minDifference = difference;
          closestIndex = mid;
        }

        if (gammaValue < value) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      bufRGBA[index + channel] = closestIndex >> 2;
    }
  }
}


function applySegDLookupTableRGBA(buf, width, height, lookUpTable) {
  const size = width * height * 4;
  for (let i = 0; i < size; i += 4) {
    buf[i] = lookUpTable[buf[i]][0];        // Red
    buf[i + 1] = lookUpTable[buf[i + 1]][1]; // Green
    buf[i + 2] = lookUpTable[buf[i + 2]][2]; // Blue
  }
}
function applyDMatrixRGBA(pixels, width, height, matrix) {
  const size = width * height * 4;

  for (let i = 0; i < size; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const newR = matrix[0][0] * r + matrix[0][1] * g + matrix[0][2] * b;
    const newG = matrix[1][0] * r + matrix[1][1] * g + matrix[1][2] * b;
    const newB = matrix[2][0] * r + matrix[2][1] * g + matrix[2][2] * b;

    pixels[i] = RANGE(Math.round(newR), 0, 255);
    pixels[i + 1] = RANGE(Math.round(newG), 0, 255);
    pixels[i + 2] = RANGE(Math.round(newB), 0, 255);
  }
}

function makeCCMatrix(saturation, hue, matrix) {

  saturation = RANGE(saturation, 0, 4.0);
  hue = RANGE(hue, 0, 360);

  // const s = (saturation - 1) * 4.0 / 99.0;
  const s = saturation;

  const Lr = 0.299, Lg = 0.587, Lb = 0.114;

  const saturationMatrix = [
    [Lr * (1 - s) + s, Lg * (1 - s), Lb * (1 - s)],
    [Lr * (1 - s), Lg * (1 - s) + s, Lb * (1 - s)],
    [Lr * (1 - s), Lg * (1 - s), Lb * (1 - s) + s]
  ];

  const hueRad = (hue * Math.PI) / 180;

  const cosHue = Math.cos(hueRad);
  const sinHue = Math.sin(hueRad);
  const hueMatrix = [
    [0.299 + 0.701 * cosHue + 0.168 * sinHue, 0.587 - 0.587 * cosHue + 0.330 * sinHue, 0.114 - 0.114 * cosHue - 0.497 * sinHue],
    [0.299 - 0.299 * cosHue - 0.328 * sinHue, 0.587 + 0.413 * cosHue + 0.035 * sinHue, 0.114 - 0.114 * cosHue + 0.292 * sinHue],
    [0.299 - 0.3 * cosHue + 1.25 * sinHue, 0.587 - 0.588 * cosHue - 1.05 * sinHue, 0.114 + 0.886 * cosHue - 0.203 * sinHue]
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        matrix[i][j] += saturationMatrix[i][k] * hueMatrix[k][j];
      }
    }
  }
}

function makeSegDLookupTable(brightness, contrast, gammaR, gammaG, gammaB, segDLookupTable) {
  // Limit input range
  brightness = RANGE(brightness, -255, 255);
  contrast = RANGE(contrast, 0, 2.0);
  gammaR = RANGE(gammaR, 0.1, 2.0);
  gammaG = RANGE(gammaG, 0.1, 2.0);
  gammaB = RANGE(gammaB, 0.1, 2.0);

  const brightnessOffset = brightness;
  const contrastFactor = contrast;

  // Reverse gamma mapping range: the larger the gamma, the smaller the gammaMapped
  const gammaRMapped = 1 / gammaR;
  const gammaGMapped = 1 / gammaG;
  const gammaBMapped = 1 / gammaB;

  for (let i = 0; i < 256; i++) {
    // Step 1: Brightness adjustment
    let adjR = RANGE(i + brightnessOffset, 0, 255);
    let adjG = RANGE(i + brightnessOffset, 0, 255);
    let adjB = RANGE(i + brightnessOffset, 0, 255);

    // Step 2: Contrast adjustment
    adjR = RANGE((adjR - 128) * contrastFactor + 128, 0, 255);
    adjG = RANGE((adjG - 128) * contrastFactor + 128, 0, 255);
    adjB = RANGE((adjB - 128) * contrastFactor + 128, 0, 255);

    // Step 3: Gamma correction
    adjR = Math.pow(adjR / 255.0, gammaRMapped) * 255.0;
    adjG = Math.pow(adjG / 255.0, gammaGMapped) * 255.0;
    adjB = Math.pow(adjB / 255.0, gammaBMapped) * 255.0;

    segDLookupTable[i] = [adjR, adjG, adjB];
  }
}

function makeRetroSegLookupTable(segDLookupTable) {
  // RGB lookup values from SEG_Table, each channel has 256 values (R, G, B)
  const SEG_Table = [
    //R, CP=1.32, SC=0.62, MTP=192, MTR=16, Min=0,
    0x00, 0x02, 0x04, 0x06, 0x08, 0x09, 0x0B, 0x0C, 0x0D, 0x0F, 0x10, 0x11, 0x13, 0x14, 0x15, 0x17,
    0x18, 0x19, 0x1A, 0x1B, 0x1D, 0x1E, 0x1F, 0x20, 0x21, 0x22, 0x23, 0x24, 0x26, 0x27, 0x28, 0x29,
    0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
    0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
    0x4A, 0x4B, 0x4C, 0x4D, 0x4E, 0x4F, 0x4F, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
    0x59, 0x5A, 0x5A, 0x5B, 0x5C, 0x5D, 0x5E, 0x5F, 0x60, 0x61, 0x62, 0x63, 0x63, 0x64, 0x65, 0x66,
    0x67, 0x68, 0x69, 0x6A, 0x6A, 0x6B, 0x6C, 0x6D, 0x6E, 0x6F, 0x70, 0x70, 0x71, 0x72, 0x73, 0x74,
    0x75, 0x76, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x7B, 0x7C, 0x7C, 0x7D, 0x7E, 0x7F, 0x80, 0x81, 0x81,
    0x82, 0x83, 0x84, 0x85, 0x86, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x8B, 0x8B, 0x8C, 0x8D, 0x8E, 0x8F,
    0x8F, 0x90, 0x91, 0x92, 0x93, 0x94, 0x94, 0x95, 0x96, 0x97, 0x98, 0x98, 0x99, 0x9A, 0x9B, 0x9C,
    0x9C, 0x9D, 0x9E, 0x9F, 0xA0, 0xA0, 0xA1, 0xA2, 0xA3, 0xA4, 0xA4, 0xA5, 0xA6, 0xA7, 0xA7, 0xA8,
    0xA9, 0xAA, 0xAB, 0xAB, 0xAC, 0xAD, 0xAE, 0xAF, 0xAF, 0xB0, 0xB1, 0xB2, 0xB2, 0xB3, 0xB4, 0xB5,
    0xB6, 0xB6, 0xB7, 0xB8, 0xB9, 0xB9, 0xBA, 0xBB, 0xBC, 0xBC, 0xBD, 0xBE, 0xBF, 0xBF, 0xC0, 0xC1,
    0xC2, 0xC3, 0xC3, 0xC4, 0xC5, 0xC6, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xCB, 0xCC, 0xCD, 0xCD, 0xCE,
    0xCF, 0xD0, 0xD1, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xDC, 0xDD, 0xDE, 0xDF,
    0xE0, 0xE2, 0xE3, 0xE4, 0xE6, 0xE7, 0xE9, 0xEA, 0xEC, 0xEE, 0xEF, 0xF1, 0xF4, 0xF6, 0xF9, 0xFF,
    //G, CP=1.32, SC=0.66, MTP=176, MTR=16, Min=0,
    0x00, 0x02, 0x03, 0x05, 0x06, 0x07, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0F, 0x10, 0x11, 0x12, 0x13,
    0x14, 0x15, 0x16, 0x17, 0x18, 0x1A, 0x1B, 0x1C, 0x1D, 0x1E, 0x1F, 0x20, 0x21, 0x22, 0x23, 0x24,
    0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x30, 0x31, 0x32, 0x33, 0x34,
    0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F, 0x40, 0x41, 0x42, 0x43,
    0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x4B, 0x4C, 0x4D, 0x4D, 0x4E, 0x4F, 0x50, 0x51,
    0x52, 0x53, 0x54, 0x55, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x5B, 0x5C, 0x5D, 0x5D, 0x5E, 0x5F,
    0x60, 0x61, 0x62, 0x63, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x6A, 0x6B, 0x6C, 0x6D,
    0x6E, 0x6F, 0x70, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x7B,
    0x7B, 0x7C, 0x7D, 0x7E, 0x7F, 0x80, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x85, 0x86, 0x87, 0x88,
    0x89, 0x8A, 0x8A, 0x8B, 0x8C, 0x8D, 0x8E, 0x8E, 0x8F, 0x90, 0x91, 0x92, 0x93, 0x93, 0x94, 0x95,
    0x96, 0x97, 0x97, 0x98, 0x99, 0x9A, 0x9B, 0x9C, 0x9C, 0x9D, 0x9E, 0x9F, 0xA0, 0xA0, 0xA1, 0xA2,
    0xA3, 0xA4, 0xA4, 0xA5, 0xA6, 0xA7, 0xA8, 0xA8, 0xA9, 0xAA, 0xAB, 0xAC, 0xAC, 0xAD, 0xAE, 0xAF,
    0xB0, 0xB0, 0xB1, 0xB2, 0xB3, 0xB4, 0xB4, 0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xB9, 0xBA, 0xBB, 0xBC,
    0xBD, 0xBE, 0xBF, 0xC0, 0xC1, 0xC2, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xCB,
    0xCC, 0xCD, 0xCF, 0xD0, 0xD1, 0xD2, 0xD3, 0xD4, 0xD5, 0xD7, 0xD8, 0xD9, 0xDA, 0xDB, 0xDD, 0xDE,
    0xDF, 0xE1, 0xE2, 0xE4, 0xE5, 0xE7, 0xE8, 0xEA, 0xEC, 0xEE, 0xF0, 0xF2, 0xF4, 0xF7, 0xFA, 0xFF,
    //B, CP=1.42, SC=0.66, MTP=160, MTR=16, Min=0,
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F,
    0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x1B, 0x1B, 0x1C, 0x1D, 0x1E,
    0x1F, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D,
    0x2E, 0x2E, 0x2F, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x3B,
    0x3C, 0x3C, 0x3D, 0x3E, 0x3F, 0x40, 0x41, 0x42, 0x43, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
    0x49, 0x4A, 0x4B, 0x4C, 0x4D, 0x4E, 0x4F, 0x4F, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x55, 0x56,
    0x57, 0x58, 0x59, 0x5A, 0x5B, 0x5B, 0x5C, 0x5D, 0x5E, 0x5F, 0x60, 0x60, 0x61, 0x62, 0x63, 0x64,
    0x65, 0x66, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x6B, 0x6B, 0x6C, 0x6D, 0x6E, 0x6F, 0x70, 0x70, 0x71,
    0x72, 0x73, 0x74, 0x75, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x7A, 0x7B, 0x7C, 0x7D, 0x7E, 0x7F,
    0x7F, 0x80, 0x81, 0x82, 0x83, 0x84, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x89, 0x8A, 0x8B, 0x8C,
    0x8D, 0x8D, 0x8E, 0x8F, 0x90, 0x91, 0x92, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x97, 0x98, 0x99,
    0x9A, 0x9B, 0x9B, 0x9C, 0x9D, 0x9E, 0x9F, 0x9F, 0xA0, 0xA1, 0xA2, 0xA3, 0xA4, 0xA4, 0xA5, 0xA6,
    0xA7, 0xA8, 0xA9, 0xAA, 0xAA, 0xAB, 0xAC, 0xAD, 0xAE, 0xAF, 0xB0, 0xB1, 0xB2, 0xB3, 0xB4, 0xB5,
    0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xBB, 0xBC, 0xBD, 0xBE, 0xBF, 0xC0, 0xC1, 0xC2, 0xC3, 0xC4, 0xC6,
    0xC7, 0xC8, 0xC9, 0xCA, 0xCC, 0xCD, 0xCE, 0xCF, 0xD1, 0xD2, 0xD3, 0xD5, 0xD6, 0xD7, 0xD9, 0xDA,
    0xDC, 0xDD, 0xDF, 0xE1, 0xE2, 0xE4, 0xE6, 0xE8, 0xEA, 0xEC, 0xEE, 0xF0, 0xF3, 0xF6, 0xF9, 0xFF,
  ];

  // Write the values to the segDLookupTable
  for (let i = 0; i < 256; i++) {
    segDLookupTable[i][0] = SEG_Table[i];       // Red channel value
    segDLookupTable[i][1] = SEG_Table[i + 256]; // Green channel value
    segDLookupTable[i][2] = SEG_Table[i + 512]; // Blue channel value
  }
}
