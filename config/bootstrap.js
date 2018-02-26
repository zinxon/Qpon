/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
  Qpon.findOne(1).exec(function (err, record) {

    if (record == null) {

      var qpon = [{
          "title": "10% Off on entire order",
          "rest": "Ciao Chow",
          "district": "nt",
          "mall": "荃新天地",
          "image": "https://4.bp.blogspot.com/-BOCREOV1bn4/We25blAFk-I/AAAAAAABNq4/DQ6I9-4htTgBxTgDXsqVLfljwGJLyBdmwCLcBGAs/s640/50.jpg",
          "coin": "500",
          "date": "02/28/2018",
          "quota": "200",
          "details": "You can get 10% Off on entire order (Dinner only)",
          "createdAt": "2018-02-13T12:13:59.971Z",
          "updatedAt": "2018-02-20T09:31:26.356Z",
          "id": 1
        },
        {
          "title": "Free wine / beer or soda",
          "rest": "CIAK - In The Kitchen",
          "district": "hk",
          "mall": "銅鑼灣世貿中心",
          "image": "http://www.laisunfnbgroup.com/uploads/timthumb.php?src=uploads/restaurant/ciak-hk-restaurant-m-cover-01-20151229121534.jpg&w=392",
          "coin": "1500",
          "date": "02/22/2018",
          "quota": "4",
          "details": "Free wine / beer or soda",
          "createdAt": "2018-02-14T08:44:02.252Z",
          "updatedAt": "2018-02-14T10:05:44.964Z",
          "id": 2
        },
        {
          "title": "20% off",
          "rest": "北角海逸酒店",
          "district": "kl",
          "mall": "又一城",
          "image": "https://images.hokobuy.com/10471101/d9f6df07610865291791f110db656cb0ebefc478/10471101_10471101fh1002180138rxnpie_180207060318_01_medium.jpg",
          "coin": "200",
          "date": "02/19/2018",
          "quota": "200",
          "details": "滋味響宴 — 北角海逸酒店《嚐鮮》7 道菜中式盛宴，豪歎鮑魚、鰵膠、上湯龍蝦、星斑或黑蒜牛柳等 7 道極品佳餚，得獎名廚主理，送紅 / 白餐酒一杯",
          "createdAt": "2018-02-20T11:28:40.570Z",
          "updatedAt": "2018-02-20T11:28:40.570Z",
          "id": 3
        },
        {
          "title": "30% Off on entire order",
          "rest": "上海小南國",
          "district": "hk",
          "mall": "時代廣場",
          "image": "https://images.hokobuy.com/10214401/989d5e3ed4be34322b3d8bbd2fabfdfb47fe240a/10214401_10214401006c00000179chviau_171030012044_01_medium.png",
          "coin": "100",
          "date": "03/23/2018",
          "quota": "200",
          "details": "食指大動 — 上海小南國 1987 美食現金券，正宗滬菜食府，嘗特色南國薑蓉雞、招牌小籠包、寶塔肉配荷葉餅等上海佳餚",
          "createdAt": "2018-02-20T11:38:07.862Z",
          "updatedAt": "2018-02-20T11:38:07.862Z",
          "id": 4
        },
        {
          "title": "20% off",
          "rest": "禦廚煎餅",
          "district": "kl",
          "mall": "圓方 Elements",
          "image": "https://images.hokobuy.com/10507501/fe5d9b08ba3f2b21d9f0f377d355814ba29cb317/10507501_10507501fh1001171125135jit_180213061304_01_medium.jpg",
          "coin": "200",
          "date": "03/08/2018",
          "quota": "200",
          "details": "脆卜卜，啖啖肉 — 禦廚煎餅美食現金券，多種餡料選擇，嚐北京烤鴨、蛋包流心芝士煎餅、麻辣羊肉煎餅等，外層鬆脆可口，內層多汁美味",
          "createdAt": "2018-02-21T09:06:10.399Z",
          "updatedAt": "2018-02-21T09:06:10.399Z",
          "id": 5
        },
        {
          "title": "44%折扣",
          "rest": "三興飯店",
          "district": "hk",
          "mall": "IFC",
          "image": "https://images.hokobuy.com/10199201/af3002dbe64bfd2d5d40ea5ee058f1af6ef01e75/10199201_10199201feg02018013969mpcx_180213120149_01_medium.jpg",
          "coin": "111",
          "date": "02/28/2018",
          "quota": "222",
          "details": "滋補大餐 — 三興飯店古法藥膳鱷魚套餐，嘗古法藥膳鱷魚肉純湯、鮑汁扣鱷魚尾膠、蒜蓉粉絲蒸貴妃蚌及清蒸大海班等特色小菜",
          "createdAt": "2018-02-21T09:10:28.766Z",
          "updatedAt": "2018-02-21T09:10:28.766Z",
          "id": 6
        },
        {
          "title": "51%折扣",
          "rest": "悅軒海鮮酒家",
          "district": "nt",
          "mall": "屯門市廣場",
          "image": "https://images.hokobuy.com/10434401/13518/10434401_a001732nqf8lv051cu_171222031057_10_medium.jpg",
          "coin": "500",
          "date": "03/14/2018",
          "quota": "200",
          "details": "皇帝「蟹」逅 — 悅軒海鮮酒家長腳皇帝蟹海鮮九大簋，大擦 4 斤阿拉斯加皇帝蟹、乳豬五彩盆、極品燒鵝皇、龍躉海鮮湯及蒸大海蝦等惹味海鮮",
          "createdAt": "2018-02-21T11:40:42.083Z",
          "updatedAt": "2018-02-21T11:40:42.083Z",
          "id": 7
        },
        {
          "title": " 「潮飲潮食」自助晚餐低至7折優惠",
          "rest": "中西∙環Centre Street Kitchen",
          "district": "hk",
          "mall": "時代廣場",
          "image": "https://static8.orstatic.com/userphoto/Coupon/0/6P/001BQR29F4D23AB470163Elv.jpg",
          "coin": "500",
          "date": "02/28/2018",
          "quota": "10",
          "details": "憑券於星期一至五惠顧中西•環餐廳自助晚餐可享75折優惠、6位或以上顧客可享7折優惠; 星期六至日可享8折優惠、6位或以上顧客可享75折優惠。",
          "createdAt": "2018-02-26T05:46:43.809Z",
          "updatedAt": "2018-02-26T05:46:43.809Z",
          "id": 8
        }
      ];


      qpon.forEach(function (qpon) {
        Qpon.create(qpon).exec(function (err, record) {});
      });

    }

  });
};
