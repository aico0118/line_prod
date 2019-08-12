
var getTodoState = function(item) {
  if (item.completed) {
    return "completed";
  }
  return "active";
};
var app = new Vue({
  el: "#app",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    open(index) {
      if(index !== -1){
        let data = this.tableData[index];
        this.$alert(`     <form style="align:center">
        <div class="form-group">
          <label for="exampleInputEmail1">商品名稱</label>
          <input  v-model="title" type="text"  value="${data.name}" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">商品說明</label>
          <textarea v-model="text" class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3">${data.desc}</textarea>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">價格</label>
            <input type="number" value="${data.price}" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">數量</label>
            <input type="number" value="${data.count}" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
        <label>圖片</label>
        <input id="card-img" class="d-none" type="file"  @change="readFile"/>
        <label for="card-img" id="dis-card-img" class="align-items-center bg-light border bordered d-flex flex-column justify-content-center mb-3 rounded" 
        style="background:url(${data.pic});background-size:cover;height:200px;width:200px;" >
            <i class="el-icon-circle-plus-outline" style="
    font-size: 30px;
  "></i>
  <div>點我上傳圖片</div>
         </label>
      
      </form>`, '編輯商品', {
          dangerouslyUseHTMLString: true
        });
      }else{
        this.$alert(`     <form style="align:center">
        <div class="form-group">
          <label for="exampleInputEmail1">商品名稱</label>
          <input  v-model="title" type="text"  value="" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">商品說明</label>
          <textarea v-model="text" class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">價格</label>
            <input type="number" value="" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">數量</label>
            <input type="number" value="" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
        <label>圖片</label>
        <input id="card-img" class="d-none" type="file"  @change="readFile"/>
        <label for="card-img" id="dis-card-img" class="align-items-center bg-light border bordered d-flex flex-column justify-content-center mb-3 rounded" 
        style="background:url();background-size:cover;height:200px;width:200px;" >
            <i class="el-icon-circle-plus-outline" style="
    font-size: 30px;
  "></i>
  <div>點我上傳圖片</div>
         </label>
      
      </form>`, '新增商品', {
          dangerouslyUseHTMLString: true
        });
      }

    }
  },
  data() {
    return {
      test:"測試",
      tableData: [{
        pic: 'https://i.imgur.com/aT8ZxEc.jpg',
        name: '綜合甜甜圈組合',
        price: '120',
        count: '1',
        desc: `鬆軟麵團X精選醬料，蹦出全新滋味！
        經典巧克力Ｘ１
        無敵大草莓Ｘ１
        甜蜜脆焦糖Ｘ１
        香濃蜜肉桂Ｘ１
        各一入`,
        date: '2019-08-09'
      },
      {
        pic: 'https://i.imgur.com/RR3IKuX.jpg',
        name: '基本口味鬆餅 X 40元以下飲料',
        price: '120',
        count: '3',
        desc: `任選40元以下飲料`,
        date: '2019-08-09'
      },
      {
        pic: 'https://www.pakutaso.com/shared/img/thumb/sushiFTHG0960_TP_V.jpg',
        name: '主廚特選壽司',
        price: '220',
        count: '99',
        desc: `根據當天食材精心準備`,
        date: '2019-08-09'
      },
      {
        pic: 'https://www.pakutaso.com/shared/img/thumb/unagidayo_TP_V.jpg',
        name: '絕讚！鰻魚飯',
        price: '999',
        count: '1',
        desc: `～添加金箔，高而不貴～犒賞自己、招待客戶的最佳選擇！`,
        date: '2019-08-09'
      },
      {
        pic: 'https://www.pakutaso.com/shared/img/thumb/SAWA2_chikuwamentai_TP_V.jpg',
        name: '明太子鑲日式高級竹輪',
        price: '220',
        count: '6',
        desc: `微辣明太子X炙燒竹輪`,
        date: '2019-08-09'
      },
      {
        pic: 'https://www.pakutaso.com/shared/img/thumb/SAWA_karaagebibinnba_TP_V.jpg',
        name: '夏日涼拌組合',
        price: '$120',
        count: '1',
        desc: `讓您清爽一夏`,
        date: '2019-08-09'
      }
    ]
    }
  }
});