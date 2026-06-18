// NCE1 前50课单词数据
// 每课包含课文标题和核心生词（含中文释义）

const nceWords = {
  1: {
    title: "Lesson 1: Excuse me!",
    words: [
      { en: "excuse", cn: "原谅" },
      { en: "me", cn: "我(宾格)" },
      { en: "yes", cn: "是的" },
      { en: "is   v.be", cn: "动词现在时第三人称单数" },
      { en: "this", cn: "这" },
      { en: "your", cn: "你的，你们的" },
      { en: "handbag   n.(", cn: "女用)手提包" },
      { en: "pardon", cn: "原谅，请再说一遍" },
      { en: "it", cn: "它" },
      { en: "thank you", cn: "感谢你(们)" },
      { en: "very much", cn: "非常地" }
    ]
  },
  2: {
    title: "Lesson 2: Is this your...?",
    words: [
      { en: "pen", cn: "钢笔" },
      { en: "pencil", cn: "铅笔" },
      { en: "book", cn: "书" },
      { en: "watch", cn: "手表" },
      { en: "coat", cn: "上衣，外衣" },
      { en: "dress", cn: "连衣裙" },
      { en: "skirt", cn: "裙子" },
      { en: "shirt", cn: "衬衣" },
      { en: "car", cn: "小汽车" },
      { en: "house", cn: "房子" }
    ]
  },
  3: {
    title: "Lesson 3: Sorry, sir.",
    words: [
      { en: "umbrella", cn: "伞" },
      { en: "please", cn: "请" },
      { en: "here", cn: "这里" },
      { en: "my", cn: "我的" },
      { en: "ticket", cn: "票" },
      { en: "number", cn: "号码" },
      { en: "five", cn: "五" },
      { en: "sorry", cn: "对不起的" },
      { en: "sir", cn: "先生" },
      { en: "cloakroom", cn: "衣帽存放处" }
    ]
  },
  4: {
    title: "Lesson 4: Is this your...?",
    words: [
      { en: "suit", cn: "一套衣服" },
      { en: "school", cn: "学校" },
      { en: "teacher", cn: "老师" },
      { en: "son", cn: "儿子" },
      { en: "daughter", cn: "女儿" }
    ]
  },
  5: {
    title: "Lesson 5: Nice to meet you.",
    words: [
      { en: "Mr.", cn: "先生" },
      { en: "good", cn: "好" },
      { en: "morning", cn: "早晨" },
      { en: "Miss", cn: "小姐" },
      { en: "new", cn: "新的" },
      { en: "student", cn: "学生" },
      { en: "French", cn: "法国人" },
      { en: "German", cn: "德国人" },
      { en: "nice", cn: "美好的" },
      { en: "meet", cn: "遇见" },
      { en: "Japanese", cn: "日本人" },
      { en: "Korean", cn: "韩国人" },
      { en: "Chinese", cn: "中国人" },
      { en: "too", cn: "也" }
    ]
  },
  6: {
    title: "Lesson 6: What make is it?",
    words: [
      { en: "make   n.(", cn: "产品的)牌号" },
      { en: "Swedish", cn: "瑞典的" },
      { en: "English", cn: "英国的" },
      { en: "American", cn: "美国的" },
      { en: "Italian", cn: "意大利的" },
      { en: "Volvo", cn: "沃尔沃" },
      { en: "Peugeot", cn: "标致" },
      { en: "Mercedes", cn: "梅赛德斯" },
      { en: "Toyota", cn: "丰田" },
      { en: "Daewoo", cn: "大宇" },
      { en: "Mini", cn: "迷你" },
      { en: "Ford", cn: "福特" },
      { en: "Fiat", cn: "菲亚特" }
    ]
  },
  7: {
    title: "Lesson 7: Are you a teacher?",
    words: [
      { en: "I", cn: "我" },
      { en: "am   v.be", cn: "动词现在时第一人称单数" },
      { en: "are   v.be", cn: "动词现在时复数" },
      { en: "name", cn: "名字" },
      { en: "what", cn: "什么" },
      { en: "nationality", cn: "国籍" },
      { en: "job", cn: "工作" },
      { en: "keyboard", cn: "电脑键盘" },
      { en: "operator", cn: "操作人员" },
      { en: "engineer", cn: "工程师" }
    ]
  },
  8: {
    title: "Lesson 8: What's your job?",
    words: [
      { en: "policeman", cn: "警察" },
      { en: "policewoman", cn: "女警察" },
      { en: "taxi driver", cn: "出租汽车司机" },
      { en: "air hostess", cn: "空中小姐" },
      { en: "postman", cn: "邮递员" },
      { en: "nurse", cn: "护士" },
      { en: "mechanic", cn: "机械师" },
      { en: "hairdresser", cn: "理发师" },
      { en: "housewife", cn: "家庭妇女" },
      { en: "milkman", cn: "送牛奶的人" }
    ]
  },
  9: {
    title: "Lesson 9: How are you today?",
    words: [
      { en: "hello", cn: "喂(表示问候)" },
      { en: "hi", cn: "喂，嗨" },
      { en: "how", cn: "怎样" },
      { en: "today", cn: "今天" },
      { en: "well", cn: "身体好" },
      { en: "fine", cn: "美好的" },
      { en: "thanks", cn: "谢谢" },
      { en: "goodbye", cn: "再见" },
      { en: "see", cn: "见" }
    ]
  },
  10: {
    title: "Lesson 10: Look at...",
    words: [
      { en: "fat", cn: "胖的" },
      { en: "woman", cn: "女人" },
      { en: "thin", cn: "瘦的" },
      { en: "tall", cn: "高的" },
      { en: "short", cn: "矮的" },
      { en: "dirty", cn: "脏的" },
      { en: "clean", cn: "干净的" },
      { en: "hot", cn: "热的" },
      { en: "cold", cn: "冷的" },
      { en: "old", cn: "老的" },
      { en: "young", cn: "年轻的" },
      { en: "busy", cn: "忙的" },
      { en: "lazy", cn: "懒的" }
    ]
  },
  11: {
    title: "Lesson 11: Is this your shirt?",
    words: [
      { en: "whose", cn: "谁的" },
      { en: "blue", cn: "蓝色的" },
      { en: "perhaps", cn: "大概" },
      { en: "white", cn: "白色的" },
      { en: "catch", cn: "抓住" }
    ]
  },
  12: {
    title: "Lesson 12: Whose is this?",
    words: [
      { en: "father", cn: "父亲" },
      { en: "mother", cn: "母亲" },
      { en: "blouse", cn: "女衬衫" },
      { en: "sister", cn: "姐，妹" },
      { en: "tie", cn: "领带" },
      { en: "brother", cn: "兄，弟" },
      { en: "his", cn: "他的" },
      { en: "her", cn: "她的" }
    ]
  },
  13: {
    title: "Lesson 13: A new dress.",
    words: [
      { en: "colour", cn: "颜色" },
      { en: "green", cn: "绿色" },
      { en: "come", cn: "来" },
      { en: "upstairs", cn: "楼上" },
      { en: "smart", cn: "时髦的，巧妙的" },
      { en: "hat", cn: "帽子" },
      { en: "same", cn: "相同的" },
      { en: "lovely", cn: "可爱的，秀丽的" }
    ]
  },
  14: {
    title: "Lesson 14: What colour's your...?",
    words: [
      { en: "case", cn: "箱子" },
      { en: "carpet", cn: "地毯" },
      { en: "dog", cn: "狗" }
    ]
  },
  15: {
    title: "Lesson 15: Your passports, please.",
    words: [
      { en: "Customs", cn: "海关" },
      { en: "officer", cn: "官员" },
      { en: "girl", cn: "女孩，姑娘" },
      { en: "Danish", cn: "丹麦人" },
      { en: "friend", cn: "朋友" },
      { en: "Norwegian", cn: "挪威人" },
      { en: "passport", cn: "护照" },
      { en: "brown", cn: "棕色的" },
      { en: "tourist", cn: "旅游者" }
    ]
  },
  16: {
    title: "Lesson 16: Are you...?",
    words: [
      { en: "Russian", cn: "俄罗斯人" },
      { en: "Dutch", cn: "荷兰人" },
      { en: "these", cn: "这些(this的复数)" },
      { en: "red", cn: "红色的" },
      { en: "grey", cn: "灰色的" },
      { en: "yellow", cn: "黄色的" },
      { en: "black", cn: "黑色的" },
      { en: "orange", cn: "橘黄色的" }
    ]
  },
  17: {
    title: "Lesson 17: How do you do?",
    words: [
      { en: "employee", cn: "雇员" },
      { en: "hard-working", cn: "勤奋的" },
      { en: "sales reps", cn: "推销员" },
      { en: "man", cn: "男人" },
      { en: "office", cn: "办公室" },
      { en: "assistant", cn: "助手" }
    ]
  },
  18: {
    title: "Lesson 18: What are their jobs?",
    words: [
    ]
  },
  19: {
    title: "Lesson 19: Tired and thirsty.",
    words: [
      { en: "matter", cn: "事情" },
      { en: "children", cn: "孩子们(child 的复数)" },
      { en: "tired", cn: "累，疲乏" },
      { en: "boy", cn: "男孩" },
      { en: "thirsty", cn: "渴" },
      { en: "mum", cn: "妈妈(儿语)" },
      { en: "sit down", cn: "坐下" },
      { en: "right", cn: "好，可以" },
      { en: "ice cream", cn: "冰淇淋" }
    ]
  },
  20: {
    title: "Lesson 20: Look at them!",
    words: [
      { en: "big", cn: "大的" },
      { en: "small", cn: "小的" },
      { en: "open", cn: "开着的" },
      { en: "shut", cn: "关着的" },
      { en: "light", cn: "轻的" },
      { en: "heavy", cn: "重的" },
      { en: "long", cn: "长的" },
      { en: "shoe", cn: "鞋子" },
      { en: "grandfather", cn: "祖父，外祖父" },
      { en: "grandmother", cn: "祖母，外祖母" }
    ]
  },
  21: {
    title: "Lesson 21: Which book?",
    words: [
      { en: "give", cn: "给" },
      { en: "one", cn: "一个" },
      { en: "which", cn: "哪一个" }
    ]
  },
  22: {
    title: "Lesson 22: Give me/him/her/us/them...",
    words: [
      { en: "empty", cn: "空的" },
      { en: "full", cn: "满的" },
      { en: "large", cn: "大的" },
      { en: "little", cn: "小的" },
      { en: "sharp", cn: "尖的，锋利的" },
      { en: "small", cn: "小的" },
      { en: "big", cn: "大的" },
      { en: "blunt", cn: "钝的" },
      { en: "box", cn: "盒子，箱子" },
      { en: "glass", cn: "杯子" },
      { en: "cup", cn: "茶杯" },
      { en: "bottle", cn: "瓶子" },
      { en: "tin", cn: "罐头" },
      { en: "knife", cn: "刀子" },
      { en: "fork", cn: "叉子" }
    ]
  },
  23: {
    title: "Lesson 23: Which glasses?",
    words: [
      { en: "on", cn: "在…之上" },
      { en: "shelf", cn: "架子，搁板" }
    ]
  },
  24: {
    title: "Lesson 24: Give me/him/her/us/them some...",
    words: [
      { en: "desk", cn: "课桌" },
      { en: "table", cn: "桌子" },
      { en: "plate", cn: "盘子" },
      { en: "cupboard", cn: "食橱" },
      { en: "cigarette", cn: "香烟" },
      { en: "television", cn: "电视机" },
      { en: "floor", cn: "地板" },
      { en: "dressing table", cn: "梳妆台" },
      { en: "magazine", cn: "杂志" },
      { en: "bed", cn: "床" },
      { en: "newspaper", cn: "报纸" },
      { en: "stereo", cn: "立体声音响" }
    ]
  },
  25: {
    title: "Lesson 25: Mrs. Smith's kitchen.",
    words: [
      { en: "Mrs.", cn: "夫人" },
      { en: "kitchen", cn: "厨房" },
      { en: "refrigerator", cn: "电冰箱" },
      { en: "right", cn: "右边" },
      { en: "electric", cn: "带电的，可通电的" },
      { en: "left", cn: "左边" },
      { en: "cooker", cn: "炉子，炊具" },
      { en: "middle", cn: "中间" },
      { en: "of   prep.(", cn: "属于)…的" },
      { en: "room", cn: "房间" },
      { en: "cup", cn: "杯子" }
    ]
  },
  26: {
    title: "Lesson 26: Where is it?",
    words: [
      { en: "where", cn: "在哪里" },
      { en: "in", cn: "在…里" }
    ]
  },
  27: {
    title: "Lesson 27: Mrs. Smith's living room.",
    words: [
      { en: "living room", cn: "客厅" },
      { en: "near", cn: "靠近" },
      { en: "window", cn: "窗户" },
      { en: "armchair", cn: "手扶椅" },
      { en: "door", cn: "门" },
      { en: "picture", cn: "图画" },
      { en: "wall", cn: "墙" }
    ]
  },
  28: {
    title: "Lesson 28: Where are they?",
    words: [
      { en: "trousers   n.〔", cn: "复数〕长裤" }
    ]
  },
  29: {
    title: "Lesson 29: Come in, Amy!",
    words: [
      { en: "shut", cn: "关门" },
      { en: "bedroom", cn: "卧室" },
      { en: "untidy", cn: "乱，不整齐" },
      { en: "must", cn: "必须，应该" },
      { en: "open", cn: "打开" },
      { en: "air", cn: "使…通风，换换空气" },
      { en: "put", cn: "放置" },
      { en: "clothes", cn: "衣服" },
      { en: "wardrobe", cn: "大衣柜" },
      { en: "dust", cn: "掸掉灰尘" },
      { en: "sweep", cn: "扫" }
    ]
  },
  30: {
    title: "Lesson 30: What must I do?",
    words: [
      { en: "empty", cn: "倒空，使…变空" },
      { en: "read", cn: "读" },
      { en: "sharpen", cn: "削尖，使锋利" },
      { en: "put on", cn: "穿上" },
      { en: "take off", cn: "脱掉" },
      { en: "turn on", cn: "开(电灯)" },
      { en: "turn off", cn: "关(电灯)" }
    ]
  },
  31: {
    title: "Lesson 31: Where's Sally?",
    words: [
      { en: "garden", cn: "花园" },
      { en: "under", cn: "在…之下" },
      { en: "tree", cn: "树" },
      { en: "climb", cn: "爬，攀登" },
      { en: "who", cn: "谁" },
      { en: "run", cn: "跑" },
      { en: "grass", cn: "草，草地" },
      { en: "after", cn: "在…之后" },
      { en: "cat", cn: "猫" }
    ]
  },
  32: {
    title: "Lesson 32: What's he/she/it doing?",
    words: [
      { en: "type", cn: "打字" },
      { en: "letter", cn: "信" },
      { en: "basket", cn: "篮子" },
      { en: "eat", cn: "吃" },
      { en: "bone", cn: "骨头" },
      { en: "clean", cn: "清洗" },
      { en: "tooth", cn: "牙齿" },
      { en: "cook", cn: "做(饭菜)" },
      { en: "milk", cn: "牛奶" },
      { en: "meal", cn: "饭，一顿饭" },
      { en: "drink", cn: "喝" },
      { en: "tap   n.(", cn: "水)龙头" }
    ]
  },
  33: {
    title: "Lesson 33: A fine day.",
    words: [
      { en: "day", cn: "日子" },
      { en: "cloud", cn: "云" },
      { en: "sky", cn: "天空" },
      { en: "sun", cn: "太阳" },
      { en: "shine", cn: "照耀" },
      { en: "with", cn: "和…在一起" },
      { en: "family", cn: "家庭(成员)" },
      { en: "walk", cn: "走路，步行" },
      { en: "over", cn: "跨越，在…之上" },
      { en: "bridge", cn: "桥" },
      { en: "boat", cn: "船" },
      { en: "river", cn: "河" },
      { en: "ship", cn: "轮船" },
      { en: "aeroplane", cn: "飞机" },
      { en: "fly", cn: "飞" }
    ]
  },
  34: {
    title: "Lesson 34: What are they doing?",
    words: [
      { en: "sleep", cn: "睡觉" },
      { en: "shave", cn: "刮脸" },
      { en: "cry", cn: "哭，喊" },
      { en: "wash", cn: "洗" },
      { en: "wait", cn: "等" },
      { en: "jump", cn: "跳" }
    ]
  },
  35: {
    title: "Lesson 35: Our village.",
    words: [
      { en: "photograph", cn: "照片" },
      { en: "village", cn: "村庄" },
      { en: "valley", cn: "山谷" },
      { en: "between", cn: "在…之间" },
      { en: "hill", cn: "小山" },
      { en: "another", cn: "另一个" },
      { en: "wife", cn: "妻子" },
      { en: "along", cn: "沿着" },
      { en: "bank", cn: "河岸" },
      { en: "water", cn: "水" },
      { en: "swim", cn: "游泳" },
      { en: "across", cn: "横过" },
      { en: "building", cn: "大楼，建筑物" },
      { en: "park", cn: "公园" },
      { en: "into", cn: "进入" }
    ]
  },
  36: {
    title: "Lesson 36: Where...?",
    words: [
      { en: "beside", cn: "在…旁" },
      { en: "off", cn: "离开" }
    ]
  },
  37: {
    title: "Lesson 37: Making a bookcase.",
    words: [
      { en: "work", cn: "工作" },
      { en: "hard", cn: "努力地" },
      { en: "make", cn: "做" },
      { en: "bookcase", cn: "书橱，书架" },
      { en: "hammer", cn: "锤子" },
      { en: "paint", cn: "上漆，涂" },
      { en: "pink", cn: "粉红色" },
      { en: "favourite", cn: "最喜欢的" }
    ]
  },
  38: {
    title: "Lesson 38: What are you going to do?",
    words: [
      { en: "homework", cn: "作业" },
      { en: "listen", cn: "听" },
      { en: "dish", cn: "盘子，碟子" }
    ]
  },
  39: {
    title: "Lesson 39: Don't drop it!",
    words: [
      { en: "front", cn: "前面" },
      { en: "in front of", cn: "在…之前" },
      { en: "careful", cn: "小心的，仔细的" },
      { en: "vase", cn: "花瓶" },
      { en: "drop", cn: "掉下" },
      { en: "flower", cn: "花" }
    ]
  },
  40: {
    title: "Lesson 40: What are you going to do?",
    words: [
      { en: "show", cn: "给…看" },
      { en: "send", cn: "送给" },
      { en: "take", cn: "带给" }
    ]
  },
  41: {
    title: "Lesson 41: Penny's bag.",
    words: [
      { en: "cheese", cn: "乳酪，干酪" },
      { en: "bread", cn: "面包" },
      { en: "soap", cn: "肥皂" },
      { en: "chocolate", cn: "巧克力" },
      { en: "sugar", cn: "糖" },
      { en: "coffee", cn: "咖啡" },
      { en: "tea", cn: "茶" },
      { en: "tobacco", cn: "烟草，烟丝" }
    ]
  },
  42: {
    title: "Lesson 42: Is there a/any...?",
    words: [
      { en: "bird", cn: "鸟" },
      { en: "any", cn: "一些" },
      { en: "some", cn: "一些" }
    ]
  },
  43: {
    title: "Lesson 43: Hurry up!",
    words: [
      { en: "of course", cn: "当然" },
      { en: "kettle", cn: "水壶" },
      { en: "behind", cn: "在…后面" },
      { en: "teapot", cn: "茶壶" },
      { en: "now", cn: "现在，此刻" },
      { en: "find", cn: "找到" },
      { en: "boil", cn: "沸腾，开" }
    ]
  },
  44: {
    title: "Lesson 44: Are there any...?",
    words: [
    ]
  },
  45: {
    title: "Lesson 45: The boss's letter.",
    words: [
      { en: "can", cn: "能够" },
      { en: "boss", cn: "老板，上司" },
      { en: "minute", cn: "分(钟)" },
      { en: "ask", cn: "请求，要求" },
      { en: "handwriting", cn: "书写" },
      { en: "terrible", cn: "糟糕的，可怕的" }
    ]
  },
  46: {
    title: "Lesson 46: Can you...?",
    words: [
      { en: "lift", cn: "拿起，搬起，举起" },
      { en: "cake", cn: "饼，蛋糕" },
      { en: "biscuit", cn: "饼干" }
    ]
  },
  47: {
    title: "Lesson 47: A cup of coffee.",
    words: [
      { en: "like", cn: "喜欢，想要" },
      { en: "want", cn: "想" }
    ]
  },
  48: {
    title: "Lesson 48: Do you like...?",
    words: [
      { en: "fresh", cn: "新鲜的" },
      { en: "egg", cn: "鸡蛋" },
      { en: "butter", cn: "黄油" },
      { en: "pure", cn: "纯净的" },
      { en: "honey", cn: "蜂蜜" },
      { en: "ripe", cn: "成熟的" },
      { en: "banana", cn: "香蕉" },
      { en: "jam", cn: "果酱" },
      { en: "sweet", cn: "甜的" },
      { en: "orange", cn: "橙" },
      { en: "Scotch whisky", cn: "苏格兰威士忌" },
      { en: "choice", cn: "上等的，精选的" },
      { en: "apple", cn: "苹果" },
      { en: "wine", cn: "酒，果酒" },
      { en: "beer", cn: "啤酒" },
      { en: "blackboard", cn: "黑板" }
    ]
  },
  49: {
    title: "Lesson 49: At the butcher's.",
    words: [
      { en: "butcher", cn: "卖肉的" },
      { en: "meat   n.(", cn: "食用)肉" },
      { en: "beef", cn: "牛肉" },
      { en: "lamb", cn: "羔羊肉" },
      { en: "husband", cn: "丈夫" },
      { en: "steak", cn: "牛排" },
      { en: "mince", cn: "肉馅，绞肉" },
      { en: "chicken", cn: "鸡" },
      { en: "tell", cn: "告诉" },
      { en: "truth", cn: "实情" },
      { en: "either", cn: "也(用于否定句)" }
    ]
  },
  50: {
    title: "Lesson 50: He likes... / He doesn't like...",
    words: [
      { en: "tomato", cn: "西红柿" },
      { en: "potato", cn: "土豆" },
      { en: "cabbage", cn: "卷心菜" },
      { en: "lettuce", cn: "莴苣" },
      { en: "pea", cn: "豌豆" },
      { en: "bean", cn: "豆角" },
      { en: "pear", cn: "梨" },
      { en: "grape", cn: "葡萄" },
      { en: "peach", cn: "桃" }
    ]
  },
  51: {
    title: "Lesson 51: A pleasant climate",
    words: [
      { en: "Greece", cn: "希腊" },
      { en: "climate", cn: "气候" },
      { en: "country", cn: "国家" },
      { en: "pleasant", cn: "宜人的" },
      { en: "weather", cn: "天气" },
      { en: "spring", cn: "春季" },
      { en: "windy", cn: "有风的" },
      { en: "warm", cn: "温暖的" },
      { en: "rain", cn: "下雨" },
      { en: "sometimes", cn: "有时" },
      { en: "summer", cn: "夏天" },
      { en: "autumn", cn: "秋天" },
      { en: "winter", cn: "冬天" },
      { en: "snow", cn: "下雪" },
      { en: "January   n.1", cn: "月" },
      { en: "February   n.2", cn: "月" },
      { en: "March   n.3", cn: "月" },
      { en: "April   n.4", cn: "月" },
      { en: "May   n.5", cn: "月" },
      { en: "June   n.6", cn: "月" },
      { en: "July   n.7", cn: "月" },
      { en: "August   n.8", cn: "月" },
      { en: "September   n.9", cn: "月" },
      { en: "October   n.10", cn: "月" },
      { en: "November   n.11", cn: "月" },
      { en: "December   n.12", cn: "月" }
    ]
  },
  52: {
    title: "Lesson 52: What nationality are they?",
    words: [
      { en: "the U.S.", cn: "美国" },
      { en: "Brazil", cn: "巴西" },
      { en: "Holland", cn: "荷兰" },
      { en: "England", cn: "英国" },
      { en: "France", cn: "法国" },
      { en: "Germany", cn: "德国" },
      { en: "Italy", cn: "意大利" },
      { en: "Norway", cn: "挪威" },
      { en: "Russia", cn: "俄罗斯" },
      { en: "Spain", cn: "西班牙" },
      { en: "Sweden", cn: "瑞典" }
    ]
  },
  53: {
    title: "Lesson 53: An interesting climate",
    words: [
      { en: "mild", cn: "温和的，温暖的" },
      { en: "always", cn: "总是" },
      { en: "north", cn: "北方" },
      { en: "east", cn: "东方" },
      { en: "wet", cn: "潮湿的" },
      { en: "west", cn: "西方" },
      { en: "south", cn: "南方" },
      { en: "season", cn: "季节" },
      { en: "best", cn: "最" },
      { en: "night", cn: "夜晚" },
      { en: "rise", cn: "升起" },
      { en: "early", cn: "早" },
      { en: "set   v.(", cn: "太阳)落下去" },
      { en: "late", cn: "晚，迟" },
      { en: "interesting", cn: "有趣的，有意思的" },
      { en: "subject", cn: "话题" },
      { en: "conversation", cn: "谈话" }
    ]
  },
  54: {
    title: "Lesson 54: What nationality are they?",
    words: [
      { en: "Australia", cn: "澳大利亚" },
      { en: "Australian", cn: "澳大利亚人" },
      { en: "Austria", cn: "奥地利" },
      { en: "Austrian", cn: "奥地利人" },
      { en: "Canada", cn: "加拿大" },
      { en: "Canadian", cn: "加拿大人" },
      { en: "China", cn: "中国" },
      { en: "Finland", cn: "芬兰" },
      { en: "Finnish", cn: "芬兰人" },
      { en: "India", cn: "印度" },
      { en: "Indian", cn: "印度人" },
      { en: "Japan", cn: "日本" },
      { en: "Nigeria", cn: "尼日利亚" },
      { en: "Nigerian", cn: "尼日利亚人" },
      { en: "Turkey", cn: "土耳其" },
      { en: "Turkish", cn: "土耳其人" },
      { en: "Korea", cn: "韩国" },
      { en: "Polish", cn: "波兰人" },
      { en: "Poland", cn: "波兰" },
      { en: "Thai", cn: "泰国人" },
      { en: "Thailand", cn: "泰国" }
    ]
  },
  55: {
    title: "Lesson 55: The Sawyer family",
    words: [
      { en: "live", cn: "住，生活" },
      { en: "stay", cn: "呆在，停留" },
      { en: "home", cn: "家 ad.在家，到家" },
      { en: "housework", cn: "家务" },
      { en: "lunch", cn: "午饭" },
      { en: "afternoon", cn: "下午" },
      { en: "usually", cn: "通常" },
      { en: "together", cn: "一起" },
      { en: "evening", cn: "晚上" },
      { en: "arrive", cn: "到达" },
      { en: "night", cn: "夜间" }
    ]
  },
  56: {
    title: "Lesson 56: What do they usually do?",
    words: [
    ]
  },
  57: {
    title: "Lesson 57: An unusual day",
    words: [
      { en: "o'clock", cn: "点钟" },
      { en: "shop", cn: "商店" },
      { en: "moment", cn: "片刻，瞬间" }
    ]
  },
  58: {
    title: "Lesson 58: What's the time?",
    words: [
    ]
  },
  59: {
    title: "Lesson 59: Is that all?",
    words: [
      { en: "envelope", cn: "信封" },
      { en: "writing paper", cn: "信纸" },
      { en: "shop assistant", cn: "售货员" },
      { en: "size", cn: "尺寸，尺码，大小" },
      { en: "pad", cn: "信笺簿" },
      { en: "glue", cn: "胶水" },
      { en: "chalk", cn: "粉笔" },
      { en: "change", cn: "零钱，找给的钱" }
    ]
  },
  60: {
    title: "Lesson 60: What's the time?",
    words: [
    ]
  },
  61: {
    title: "Lesson 61: A bad cold",
    words: [
      { en: "feel", cn: "感觉" },
      { en: "look", cn: "看(起来)" },
      { en: "must", cn: "必须" },
      { en: "call", cn: "叫，请" },
      { en: "doctor", cn: "医生" },
      { en: "telephone", cn: "电话" },
      { en: "remember", cn: "记得，记住" },
      { en: "mouth", cn: "嘴" },
      { en: "tongue", cn: "舌头" },
      { en: "bad", cn: "坏的，严重的" },
      { en: "cold", cn: "感冒" },
      { en: "news", cn: "消息" },
      { en: "headache", cn: "头痛" },
      { en: "aspirin", cn: "阿斯匹林" },
      { en: "earache", cn: "耳痛" },
      { en: "toothache", cn: "牙痛" },
      { en: "dentist", cn: "牙医" },
      { en: "stomach ache", cn: "胃痛" },
      { en: "medicine", cn: "药" },
      { en: "temperature", cn: "温度" },
      { en: "flu", cn: "流行性感冒" },
      { en: "measles", cn: "麻疹" },
      { en: "mumps", cn: "腮腺炎" }
    ]
  },
  62: {
    title: "Lesson 62: What's the matter with them?",
    words: [
    ]
  },
  63: {
    title: "Lesson 63: Thank you, doctor.",
    words: [
      { en: "better", cn: "形容词well的比较级" },
      { en: "certainly", cn: "当然" },
      { en: "get up", cn: "起床" },
      { en: "yet", cn: "还，仍" },
      { en: "rich", cn: "油腻的" },
      { en: "food", cn: "食物" },
      { en: "remain", cn: "保持，继续" }
    ]
  },
  64: {
    title: "Lesson 64: Don't...!",
    words: [
      { en: "play", cn: "玩" },
      { en: "match", cn: "火柴" },
      { en: "talk", cn: "谈话" },
      { en: "library", cn: "图书馆" },
      { en: "drive", cn: "开车" },
      { en: "so", cn: "如此地" },
      { en: "quickly", cn: "快地" },
      { en: "lean out of", cn: "身体探出" },
      { en: "break", cn: "打破" }
    ]
  },
  65: {
    title: "Lesson 65: Not a baby",
    words: [
      { en: "Dad", cn: "爸(儿语)" },
      { en: "key", cn: "钥匙" },
      { en: "baby", cn: "婴儿" },
      { en: "hear", cn: "听见" },
      { en: "enjoy", cn: "玩得快活" },
      { en: "yourself", cn: "你自己" },
      { en: "ourselves", cn: "我们自己" }
    ]
  },
  66: {
    title: "Lesson 66: What's the time?",
    words: [
      { en: "myself", cn: "我自己" },
      { en: "themselves", cn: "他们自己" },
      { en: "himself", cn: "他自己" },
      { en: "herself", cn: "她自己" }
    ]
  },
  67: {
    title: "Lesson 67: The weekend",
    words: [
      { en: "greengrocer", cn: "蔬菜水果零售商" },
      { en: "absent", cn: "缺席的" },
      { en: "Monday", cn: "星期一" },
      { en: "Tuesday", cn: "星期二" },
      { en: "Wednesday", cn: "星期三" },
      { en: "Thursday", cn: "星期四" },
      { en: "keep   v.(", cn: "身体健康)处于(状况)" },
      { en: "spend", cn: "度过" },
      { en: "weekend", cn: "周末" },
      { en: "Friday", cn: "星期五" },
      { en: "Saturday", cn: "星期六" },
      { en: "Sunday", cn: "星期日" },
      { en: "country", cn: "乡村" },
      { en: "lucky", cn: "幸运的" }
    ]
  },
  68: {
    title: "Lesson 68: What's the time?",
    words: [
      { en: "church", cn: "教堂" },
      { en: "dairy", cn: "乳品店" },
      { en: "baker", cn: "面包师傅" },
      { en: "grocer", cn: "食品杂货商" }
    ]
  },
  69: {
    title: "Lesson 69: The car race",
    words: [
      { en: "year", cn: "年" },
      { en: "race", cn: "比赛" },
      { en: "town", cn: "城镇" },
      { en: "crowd", cn: "人群" },
      { en: "stand", cn: "站立" },
      { en: "exciting", cn: "使人激动的" },
      { en: "just", cn: "正好，恰好" },
      { en: "finish", cn: "结尾，结束" },
      { en: "winner", cn: "获胜者" },
      { en: "behind   prop.", cn: "在…之后" },
      { en: "way", cn: "路途" }
    ]
  },
  70: {
    title: "Lesson 70: When did you...?",
    words: [
    ]
  },
  71: {
    title: "Lesson 71: He's awful!",
    words: [
      { en: "awful", cn: "让人讨厌的，坏的" },
      { en: "telephone", cn: "打电话" },
      { en: "time", cn: "次(数)" },
      { en: "answer", cn: "接(电话)" },
      { en: "last", cn: "最后的，前一次的" },
      { en: "phone", cn: "电话(=telephone)" },
      { en: "again", cn: "又一次地" },
      { en: "say", cn: "说" }
    ]
  },
  72: {
    title: "Lesson 72: When did you...?",
    words: [
    ]
  },
  73: {
    title: "Lesson 73: The way to King Street",
    words: [
      { en: "week", cn: "周" },
      { en: "London", cn: "伦敦" },
      { en: "suddenly", cn: "突然地" },
      { en: "bus stop", cn: "公共汽车车站" },
      { en: "smile", cn: "微笑" },
      { en: "pleasantly", cn: "愉快地" },
      { en: "understand", cn: "懂，明白" },
      { en: "speak", cn: "讲，说" },
      { en: "hand", cn: "手" },
      { en: "pocket", cn: "衣袋" },
      { en: "phrasebook", cn: "短语手册，常用语手册" },
      { en: "phrase", cn: "短语" },
      { en: "slowly", cn: "缓慢地" }
    ]
  },
  74: {
    title: "Lesson 74: What did they do?",
    words: [
      { en: "hurriedly", cn: "匆忙地" },
      { en: "cut", cn: "割，切" },
      { en: "thirstily", cn: "口渴地" },
      { en: "go", cn: "走" },
      { en: "greet", cn: "问候，找招呼" }
    ]
  },
  75: {
    title: "Lesson 75: Uncomfortable shoes",
    words: [
      { en: "ago", cn: "以前" },
      { en: "buy", cn: "买" },
      { en: "pair", cn: "双，对" },
      { en: "fashion   n.(", cn: "服装的)流行式样" },
      { en: "uncomfortable", cn: "不舒服的" },
      { en: "wear", cn: "穿着" }
    ]
  },
  76: {
    title: "Lesson 76: When did you...?",
    words: [
    ]
  },
  77: {
    title: "Lesson 77: Terrible toothache",
    words: [
      { en: "appointment", cn: "约会，预约" },
      { en: "urgent", cn: "紧急的，急迫的" },
      { en: "till", cn: "直到…为止" }
    ]
  },
  78: {
    title: "Lesson 78: When did you...?",
    words: [
    ]
  },
  79: {
    title: "Lesson 79: Carol's shopping list",
    words: [
      { en: "shopping", cn: "购物" },
      { en: "list", cn: "单子" },
      { en: "vegetable", cn: "蔬菜" },
      { en: "need", cn: "需要" },
      { en: "hope", cn: "希望" },
      { en: "thing", cn: "事情" },
      { en: "money", cn: "钱" }
    ]
  },
  80: {
    title: "Lesson 80: I must go to the...",
    words: [
      { en: "groceries", cn: "食品杂货" },
      { en: "fruit", cn: "水果" },
      { en: "stationery", cn: "文具" },
      { en: "newsagent", cn: "报刊零售人" },
      { en: "chemist", cn: "化剂师，化学家" }
    ]
  },
  81: {
    title: "Lesson 81: Roast beef and potatoes",
    words: [
      { en: "bath", cn: "洗澡" },
      { en: "nearly", cn: "几乎，将近" },
      { en: "ready", cn: "准备好的，完好的" },
      { en: "dinner", cn: "正餐，晚餐" },
      { en: "restaurant", cn: "饭馆，餐馆" },
      { en: "roast", cn: "烤的" }
    ]
  },
  82: {
    title: "Lesson 82: I ate... / He ate...",
    words: [
      { en: "breakfast", cn: "早饭" },
      { en: "haircut", cn: "理发" },
      { en: "party", cn: "聚会" },
      { en: "holiday", cn: "假日" }
    ]
  },
  83: {
    title: "Lesson 83: Going on holiday",
    words: [
      { en: "mess", cn: "杂乱，凌乱" },
      { en: "pack", cn: "包装，打包，装箱" },
      { en: "suitcase", cn: "手提箱" },
      { en: "leave", cn: "离开" },
      { en: "already", cn: "已经" }
    ]
  },
  84: {
    title: "Lesson 84: Have you had...?",
    words: [
    ]
  },
  85: {
    title: "Lesson 85: Paris in the spring",
    words: [
      { en: "Paris", cn: "巴黎" },
      { en: "cinema", cn: "电影院" },
      { en: "film", cn: "电影" },
      { en: "beautiful", cn: "漂亮的" },
      { en: "city", cn: "城市" },
      { en: "never", cn: "从来没有" },
      { en: "ever", cn: "在任何时候" }
    ]
  },
  86: {
    title: "Lesson 86: What have you done?",
    words: [
    ]
  },
  87: {
    title: "Lesson 87: A car crash",
    words: [
      { en: "attendant", cn: "接待员" },
      { en: "bring", cn: "带来，送来" },
      { en: "garage", cn: "车库，汽车修理厂" },
      { en: "crash", cn: "碰撞" },
      { en: "lamp-post", cn: "灯杆" },
      { en: "repair", cn: "修理" },
      { en: "try", cn: "努力，设法" }
    ]
  },
  88: {
    title: "Lesson 88: Have you... yet?",
    words: [
    ]
  },
  89: {
    title: "Lesson 89: For sale",
    words: [
      { en: "believe", cn: "相信，认为" },
      { en: "may   (", cn: "用于请求许可)可以" },
      { en: "how long", cn: "多长" },
      { en: "since", cn: "自从" },
      { en: "why", cn: "为什么" },
      { en: "sell", cn: "卖，出售" },
      { en: "because", cn: "因为" },
      { en: "retire", cn: "退休" },
      { en: "cost", cn: "花费" },
      { en: "pound", cn: "英镑" },
      { en: "worth", cn: "值…钱" },
      { en: "penny", cn: "便士" }
    ]
  },
  90: {
    title: "Lesson 90: Have you... yet?",
    words: [
    ]
  },
  91: {
    title: "Lesson 91: Poor Ian!",
    words: [
      { en: "still", cn: "还，仍旧" },
      { en: "move", cn: "搬家" },
      { en: "miss", cn: "想念，思念" },
      { en: "neighbour", cn: "邻居" },
      { en: "person", cn: "人" },
      { en: "people", cn: "人们" },
      { en: "poor", cn: "可怜的" }
    ]
  },
  92: {
    title: "Lesson 92: When did you...?",
    words: [
    ]
  },
  93: {
    title: "Lesson 93: Our new neighbour",
    words: [
      { en: "pilot", cn: "飞行员" },
      { en: "return", cn: "返回" },
      { en: "New York", cn: "纽约" },
      { en: "Tokyo", cn: "东京" },
      { en: "Madrid", cn: "马德里" },
      { en: "fly", cn: "飞行" }
    ]
  },
  94: {
    title: "Lesson 94: When did you...?",
    words: [
      { en: "Athens", cn: "雅典" },
      { en: "Berlin", cn: "柏林" },
      { en: "Bombay", cn: "孟买" },
      { en: "Geneva", cn: "日内瓦" },
      { en: "Moscow", cn: "莫斯科" },
      { en: "Rome", cn: "罗马" },
      { en: "Seoul", cn: "汉城" },
      { en: "Stockholm", cn: "斯德哥尔摩" },
      { en: "Sydney", cn: "悉尼" }
    ]
  },
  95: {
    title: "Lesson 95: Tickets, please.",
    words: [
      { en: "return", cn: "往返" },
      { en: "train", cn: "火车" },
      { en: "platform", cn: "站台" },
      { en: "plenty", cn: "大量" },
      { en: "bar", cn: "酒吧" },
      { en: "station", cn: "车站，火车站" },
      { en: "catch", cn: "赶上" },
      { en: "miss", cn: "错过" }
    ]
  },
  96: {
    title: "Lesson 96: What's the exact time?",
    words: [
    ]
  },
  97: {
    title: "Lesson 97: A small blue case",
    words: [
      { en: "leave", cn: "遗留" },
      { en: "describe", cn: "描述" },
      { en: "zip", cn: "拉链" },
      { en: "label", cn: "标签" },
      { en: "handle", cn: "提手，把手" },
      { en: "address", cn: "地址" },
      { en: "pence   n.penny", cn: "的复数形式" },
      { en: "belong", cn: "属于" }
    ]
  },
  98: {
    title: "Lesson 98: Whose is it?",
    words: [
    ]
  },
  99: {
    title: "Lesson 99: Ow!",
    words: [
      { en: "ow", cn: "哎哟" },
      { en: "slip", cn: "滑倒，滑了一脚" },
      { en: "fall", cn: "落下，跌倒" },
      { en: "downstairs", cn: "下楼" },
      { en: "hurt", cn: "伤，伤害，疼痛" },
      { en: "back", cn: "背" },
      { en: "stand up", cn: "起立，站起来" },
      { en: "help", cn: "帮助" },
      { en: "at once", cn: "立即" },
      { en: "sure", cn: "一定的，确信的" },
      { en: "X-ray   n.X", cn: "光透视" }
    ]
  },
  100: {
    title: "Lesson 100: He says that...",
    words: [
    ]
  },
  101: {
    title: "Lesson 101: A card from Jimmy",
    words: [
      { en: "Scotland", cn: "苏格兰(英国)" },
      { en: "card", cn: "明信片" },
      { en: "youth", cn: "青年" },
      { en: "hostel", cn: "招待所，旅馆" },
      { en: "association", cn: "协会" },
      { en: "soon", cn: "不久" },
      { en: "write", cn: "写" }
    ]
  },
  102: {
    title: "Lesson 102: He says he...",
    words: [
    ]
  },
  103: {
    title: "Lesson 103: The French test",
    words: [
      { en: "exam", cn: "考试" },
      { en: "pass", cn: "及格，通过" },
      { en: "mathematics", cn: "数学" },
      { en: "question", cn: "问题" },
      { en: "easy", cn: "容易的" },
      { en: "enough", cn: "足够地" },
      { en: "paper", cn: "考卷" },
      { en: "fail", cn: "未及格，失败" },
      { en: "answer", cn: "回答" },
      { en: "mark", cn: "分数" },
      { en: "rest", cn: "其他的东西" },
      { en: "difficult", cn: "困难的" },
      { en: "hate", cn: "讨厌" },
      { en: "low", cn: "低的" },
      { en: "cheer", cn: "振作，振奋" },
      { en: "guy", cn: "家伙，人" },
      { en: "top", cn: "上方，顶部" }
    ]
  },
  104: {
    title: "Lesson 104: Too, very, enough",
    words: [
      { en: "clever", cn: "聪明的" },
      { en: "stupid", cn: "笨的" },
      { en: "cheap", cn: "便宜的" },
      { en: "expensive", cn: "贵的" },
      { en: "fresh", cn: "新鲜的" },
      { en: "stale", cn: "变馊的" },
      { en: "low", cn: "低的，矮的" },
      { en: "loud", cn: "大声的" },
      { en: "high", cn: "高的" },
      { en: "hard", cn: "硬的" },
      { en: "sweet", cn: "甜的" },
      { en: "soft", cn: "软的" },
      { en: "sour", cn: "酸的" }
    ]
  },
  105: {
    title: "Lesson 105: Full of mistakes",
    words: [
      { en: "spell", cn: "拼写" },
      { en: "intelligent", cn: "聪明的，有智慧的" },
      { en: "mistake", cn: "错误" },
      { en: "present", cn: "礼物" },
      { en: "dictionary", cn: "词典" }
    ]
  },
  106: {
    title: "Lesson 106: I want you to...",
    words: [
      { en: "carry", cn: "携带" },
      { en: "correct", cn: "改正，纠正" }
    ]
  },
  107: {
    title: "Lesson 107: It's too small",
    words: [
      { en: "madam", cn: "夫人，女士(对妇女的尊称)" },
      { en: "as well", cn: "同样" },
      { en: "suit", cn: "适于" },
      { en: "pretty", cn: "漂亮的" }
    ]
  },
  108: {
    title: "Lesson 108: How do they compare?",
    words: [
    ]
  },
  109: {
    title: "Lesson 109: A good idea",
    words: [
      { en: "idea", cn: "主意" },
      { en: "a little", cn: "少许(用于不可数名词之前)" },
      { en: "teaspoonful", cn: "一满茶匙" },
      { en: "less   a.(little", cn: "的比较级)校少的，更小的" },
      { en: "a few", cn: "几个(用于可数名词之前)" },
      { en: "pity", cn: "遗憾" },
      { en: "instead", cn: "代替" },
      { en: "advice", cn: "建议，忠告" }
    ]
  },
  110: {
    title: "Lesson 110: How do they compare?",
    words: [
      { en: "most   a.(many,much", cn: "的最高级)最多的" },
      { en: "least   a.(little", cn: "的最高级)最小的，最少的" },
      { en: "best   a.(good", cn: "的最高级)最好的" },
      { en: "worse   a.(bad", cn: "的比较级)更坏的" },
      { en: "worst   a.(bad", cn: "的最高级)最坏的" }
    ]
  },
  111: {
    title: "Lesson 111: The most expensive model",
    words: [
      { en: "model", cn: "型号，式样" },
      { en: "afford", cn: "付得起(钱)" },
      { en: "deposit", cn: "预付定金" },
      { en: "instalment", cn: "分期付款" },
      { en: "price", cn: "价格" },
      { en: "millionaire", cn: "百万富翁" }
    ]
  },
  112: {
    title: "Lesson 112: How do they compare?",
    words: [
    ]
  },
  113: {
    title: "Lesson 113: Small change",
    words: [
      { en: "conductor", cn: "售票员" },
      { en: "fare", cn: "车费，车票" },
      { en: "change", cn: "兑换(钱)" },
      { en: "note", cn: "纸币" },
      { en: "passenger", cn: "乘客" },
      { en: "none", cn: "没有任何东西" },
      { en: "neither", cn: "也不" },
      { en: "get off", cn: "下车" },
      { en: "tramp", cn: "流浪汉" },
      { en: "except", cn: "除…外" }
    ]
  },
  114: {
    title: "Lesson 114: I've got none",
    words: [
    ]
  },
  115: {
    title: "Lesson 115: Knock, knock!",
    words: [
      { en: "anyone pron.(", cn: "用于疑问句，否定式)任何人" },
      { en: "knock", cn: "敲，打" },
      { en: "everything", cn: "一切事物" },
      { en: "quiet", cn: "宁静的，安静的" },
      { en: "impossible", cn: "不可能的" },
      { en: "invite", cn: "邀请" },
      { en: "anything", cn: "任何东西" },
      { en: "nothing", cn: "什么也没有" },
      { en: "lemonade", cn: "柠檬水" },
      { en: "joke", cn: "开玩笑" }
    ]
  },
  116: {
    title: "Lesson 116: Every, no, any and some",
    words: [
      { en: "asleep", cn: "睡觉，睡着(用作表语)" },
      { en: "glasses", cn: "眼镜" }
    ]
  },
  117: {
    title: "Lesson 117: Tommy's breakfast",
    words: [
      { en: "dining room", cn: "饭厅" },
      { en: "coin", cn: "硬币" },
      { en: "mouth", cn: "嘴" },
      { en: "swallow", cn: "吞下" },
      { en: "later", cn: "后来" },
      { en: "toilet", cn: "厕所，盥洗室" }
    ]
  },
  118: {
    title: "Lesson 118: What were you doing?",
    words: [
      { en: "ring", cn: "响" }
    ]
  },
  119: {
    title: "Lesson 119: A true story",
    words: [
      { en: "story", cn: "故事" },
      { en: "happen", cn: "发生" },
      { en: "thief", cn: "贼" },
      { en: "enter", cn: "进入" },
      { en: "dark", cn: "黑暗的" },
      { en: "torch", cn: "手电筒" },
      { en: "voice   n.(", cn: "说话的)声音" },
      { en: "parrot", cn: "鹦鹉" }
    ]
  },
  120: {
    title: "Lesson 120: It had already happened",
    words: [
      { en: "exercise book", cn: "练习本" }
    ]
  },
  121: {
    title: "Lesson 121: The man in a hat",
    words: [
      { en: "customer", cn: "顾客" },
      { en: "forget", cn: "忘记" },
      { en: "manager", cn: "经理" },
      { en: "serve", cn: "照应，服务，接待" },
      { en: "counter", cn: "柜台" },
      { en: "recognize", cn: "认识" }
    ]
  },
  122: {
    title: "Lesson 122: Who (whom), which and that",
    words: [
      { en: "road", cn: "路" }
    ]
  },
  123: {
    title: "Lesson 123: A trip to Australia",
    words: [
      { en: "during", cn: "在…期间" },
      { en: "trip", cn: "旅行" },
      { en: "travel", cn: "旅行" },
      { en: "offer", cn: "提供" },
      { en: "job", cn: "工作" },
      { en: "guess", cn: "猜" },
      { en: "grow", cn: "长，让…生长" },
      { en: "beard   n.(", cn: "下巴上的)胡子，络腮胡子" }
    ]
  },
  124: {
    title: "Lesson 124: (Who) / (whom), (which) and (that)",
    words: [
      { en: "kitten", cn: "小猫" }
    ]
  },
  125: {
    title: "Lesson 125: Tea for two",
    words: [
      { en: "water", cn: "浇水" },
      { en: "terribly", cn: "非常" },
      { en: "dry", cn: "干燥的，干的" },
      { en: "nuisance", cn: "讨厌的东西或人" },
      { en: "mean", cn: "意味着，意思是" },
      { en: "surprise", cn: "惊奇，意外的事" }
    ]
  },
  126: {
    title: "Lesson 126: Have to and do not need to",
    words: [
      { en: "immediately", cn: "立即地" }
    ]
  },
  127: {
    title: "Lesson 127: A famous actress",
    words: [
      { en: "famous", cn: "著名的" },
      { en: "actress", cn: "女演员" },
      { en: "at least", cn: "至少" },
      { en: "actor", cn: "男演员" },
      { en: "read", cn: "通过阅读得知" }
    ]
  },
  128: {
    title: "Lesson 128: He can't be...",
    words: [
    ]
  },
  129: {
    title: "Lesson 129: Seventy miles an hour",
    words: [
      { en: "wave", cn: "招手" },
      { en: "track", cn: "跑道" },
      { en: "mile", cn: "英里" },
      { en: "overtake", cn: "从后面超越，超车" },
      { en: "speed", cn: "限速" },
      { en: "dream", cn: "做梦，思想不集中" },
      { en: "sign", cn: "标记，牌子" },
      { en: "driving licence", cn: "驾驶执照" },
      { en: "charge", cn: "罚款" },
      { en: "darling", cn: "亲爱的(用作表示称呼)" }
    ]
  },
  130: {
    title: "Lesson 130: He can't have been...",
    words: [
    ]
  },
  131: {
    title: "Lesson 131: Don't be so sure!",
    words: [
      { en: "Egypt", cn: "埃及" },
      { en: "abroad", cn: "国外" },
      { en: "worry", cn: "担忧" }
    ]
  },
  132: {
    title: "Lesson 132: He may be... / He may have been...",
    words: [
    ]
  },
  133: {
    title: "Lesson 133: Sensational news!",
    words: [
      { en: "reporter", cn: "记者" },
      { en: "sensational", cn: "爆炸性的，耸人听闻的" },
      { en: "mink coat", cn: "貂皮大衣" }
    ]
  },
  134: {
    title: "Lesson 134: He said (that) he...",
    words: [
    ]
  },
  135: {
    title: "Lesson 135: The latest report",
    words: [
      { en: "future", cn: "未来的" },
      { en: "get married", cn: "结婚" },
      { en: "hotel", cn: "饭店" },
      { en: "latest", cn: "最新的" },
      { en: "introduce", cn: "介绍" }
    ]
  },
  136: {
    title: "Lesson 136: He said (that) he...",
    words: [
    ]
  },
  137: {
    title: "Lesson 137: A pleasant dream",
    words: [
      { en: "football", cn: "足球" },
      { en: "pool", cn: "赌注" },
      { en: "win", cn: "赢" },
      { en: "world", cn: "世界" },
      { en: "poor", cn: "贫穷的" },
      { en: "depend", cn: "依靠(on)" }
    ]
  },
  138: {
    title: "Lesson 138: If...",
    words: [
    ]
  },
  139: {
    title: "Lesson 139: Is that you, John?",
    words: [
      { en: "extra", cn: "额外的" },
      { en: "engineer", cn: "工程师" },
      { en: "overseas", cn: "海外的，国外的" },
      { en: "engineering", cn: "工程" },
      { en: "company", cn: "公司" },
      { en: "line", cn: "线路" }
    ]
  },
  140: {
    title: "Lesson 140: He wants to know if/why/what/when",
    words: [
    ]
  },
  141: {
    title: "Lesson 141: Sally's first train ride",
    words: [
      { en: "excited", cn: "兴奋的" },
      { en: "get on", cn: "登上" },
      { en: "middle-aged", cn: "中年的" },
      { en: "opposite", cn: "在…对面" },
      { en: "curiously", cn: "好奇地" },
      { en: "funny", cn: "可笑的，滑稽的" },
      { en: "powder", cn: "香粉" },
      { en: "compact", cn: "带镜的化妆盒" },
      { en: "kindly", cn: "和蔼地" },
      { en: "ugly", cn: "丑陋的" },
      { en: "amused", cn: "有趣的" },
      { en: "smile", cn: "微笑" },
      { en: "embarrassed", cn: "尴尬的，窘迫的" }
    ]
  },
  142: {
    title: "Lesson 142: Someone invited...",
    words: [
      { en: "worried", cn: "担心，担忧" },
      { en: "regularly", cn: "经常地，定期地" }
    ]
  },
  143: {
    title: "Lesson 143: A walk through the woods",
    words: [
      { en: "surround", cn: "包围" },
      { en: "wood", cn: "树林" },
      { en: "beauty spot", cn: "风景点" },
      { en: "hundred", cn: "百" },
      { en: "city", cn: "城市" },
      { en: "through", cn: "穿过" },
      { en: "visitor", cn: "参观者，游客，来访者" },
      { en: "tidy", cn: "整齐的" },
      { en: "litter", cn: "杂乱的东西" },
      { en: "litter basket", cn: "废物筐" },
      { en: "place", cn: "放" },
      { en: "throw", cn: "扔，抛" },
      { en: "rubbish", cn: "垃圾" },
      { en: "count", cn: "数，点" },
      { en: "cover", cn: "覆盖" },
      { en: "piece", cn: "碎片" },
      { en: "tyre", cn: "轮胎" },
      { en: "rusty", cn: "生锈的" },
      { en: "among", cn: "在…之间" },
      { en: "prosecute", cn: "依法处置" }
    ]
  },
  144: {
    title: "Lesson 144: He hasn't been served yet",
    words: [
    ]
  }
};

// 获取所有单词的平铺列表（去重）
function getAllWords() {
  const seen = new Set();
  const all = [];
  const sortedKeys = Object.keys(nceWords).map(Number).sort((a, b) => a - b);
  for (const key of sortedKeys) {
    for (const w of nceWords[key].words) {
      const lower = w.en.toLowerCase();
      if (!seen.has(lower)) {
        seen.add(lower);
        all.push(w);
      }
    }
  }
  return all;
}

// 获取指定课次范围的单词
function getWordsByLessonRange(from, to) {
  const result = [];
  const seen = new Set();
  const sortedKeys = Object.keys(nceWords).map(Number).sort((a, b) => a - b);
  for (const key of sortedKeys) {
    if (key >= from && key <= to) {
      for (const w of nceWords[key].words) {
        const lower = w.en.toLowerCase();
        if (!seen.has(lower)) {
          seen.add(lower);
          result.push(w);
        }
      }
    }
  }
  return result;
}
