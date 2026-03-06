// NCE1 前50课单词数据
// 每课包含课文标题和核心生词（含中文释义）

const nceWords = {
  1: {
    title: "Lesson 1: Excuse me!",
    words: [
      { en: "excuse", cn: "原谅" },
      { en: "me", cn: "我" },
      { en: "yes", cn: "是的" },
      { en: "this", cn: "这" },
      { en: "your", cn: "你的" },
      { en: "handbag", cn: "手提包" },
      { en: "pardon", cn: "请再说一遍" },
      { en: "it", cn: "它" },
      { en: "thank", cn: "感谢" },
      { en: "very", cn: "非常" },
      { en: "much", cn: "许多" }
    ]
  },
  3: {
    title: "Lesson 3: Sorry, sir.",
    words: [
      { en: "umbrella", cn: "雨伞" },
      { en: "please", cn: "请" },
      { en: "here", cn: "这里" },
      { en: "my", cn: "我的" },
      { en: "ticket", cn: "票" },
      { en: "number", cn: "号码" },
      { en: "sorry", cn: "对不起" },
      { en: "sir", cn: "先生" },
      { en: "coat", cn: "外套" },
      { en: "five", cn: "五" }
    ]
  },
  5: {
    title: "Lesson 5: Nice to meet you.",
    words: [
      { en: "morning", cn: "早上" },
      { en: "good", cn: "好的" },
      { en: "new", cn: "新的" },
      { en: "student", cn: "学生" },
      { en: "French", cn: "法国的" },
      { en: "German", cn: "德国的" },
      { en: "nice", cn: "高兴的" },
      { en: "meet", cn: "见面" },
      { en: "Japanese", cn: "日本的" },
      { en: "Korean", cn: "韩国的" },
      { en: "Chinese", cn: "中国的" },
      { en: "too", cn: "也" }
    ]
  },
  7: {
    title: "Lesson 7: Are you a teacher?",
    words: [
      { en: "name", cn: "名字" },
      { en: "nationality", cn: "国籍" },
      { en: "job", cn: "工作" },
      { en: "keyboard", cn: "键盘" },
      { en: "operator", cn: "操作员" },
      { en: "engineer", cn: "工程师" },
      { en: "Italian", cn: "意大利的" },
      { en: "teacher", cn: "老师" }
    ]
  },
  9: {
    title: "Lesson 9: How are you today?",
    words: [
      { en: "hello", cn: "你好" },
      { en: "today", cn: "今天" },
      { en: "well", cn: "好" },
      { en: "fine", cn: "很好" },
      { en: "thanks", cn: "谢谢" },
      { en: "goodbye", cn: "再见" },
      { en: "see", cn: "看见" }
    ]
  },
  11: {
    title: "Lesson 11: Is this your shirt?",
    words: [
      { en: "whose", cn: "谁的" },
      { en: "blue", cn: "蓝色的" },
      { en: "perhaps", cn: "也许" },
      { en: "white", cn: "白色的" },
      { en: "catch", cn: "接住" },
      { en: "shirt", cn: "衬衫" },
      { en: "son", cn: "儿子" },
      { en: "daughter", cn: "女儿" }
    ]
  },
  13: {
    title: "Lesson 13: A new dress.",
    words: [
      { en: "colour", cn: "颜色" },
      { en: "green", cn: "绿色的" },
      { en: "come", cn: "来" },
      { en: "upstairs", cn: "上楼" },
      { en: "smart", cn: "漂亮的" },
      { en: "hat", cn: "帽子" },
      { en: "same", cn: "相同的" },
      { en: "lovely", cn: "可爱的" },
      { en: "dress", cn: "连衣裙" },
      { en: "case", cn: "箱子" },
      { en: "carpet", cn: "地毯" }
    ]
  },
  15: {
    title: "Lesson 15: Your passports, please.",
    words: [
      { en: "customs", cn: "海关" },
      { en: "officer", cn: "官员" },
      { en: "girl", cn: "女孩" },
      { en: "boy", cn: "男孩" },
      { en: "friend", cn: "朋友" },
      { en: "passport", cn: "护照" },
      { en: "brown", cn: "棕色的" },
      { en: "tourist", cn: "游客" }
    ]
  },
  17: {
    title: "Lesson 17: How do you do?",
    words: [
      { en: "employee", cn: "雇员" },
      { en: "hard", cn: "努力地" },
      { en: "work", cn: "工作" },
      { en: "sales", cn: "销售" },
      { en: "man", cn: "男人" },
      { en: "woman", cn: "女人" },
      { en: "office", cn: "办公室" },
      { en: "assistant", cn: "助手" }
    ]
  },
  19: {
    title: "Lesson 19: Tired and thirsty.",
    words: [
      { en: "matter", cn: "事情" },
      { en: "children", cn: "孩子们" },
      { en: "tired", cn: "累的" },
      { en: "thirsty", cn: "渴的" },
      { en: "sit", cn: "坐" },
      { en: "down", cn: "向下" },
      { en: "right", cn: "好的" },
      { en: "cream", cn: "奶油" },
      { en: "ice", cn: "冰" }
    ]
  },
  21: {
    title: "Lesson 21: Which book?",
    words: [
      { en: "give", cn: "给" },
      { en: "which", cn: "哪一个" },
      { en: "one", cn: "一个" },
      { en: "large", cn: "大的" },
      { en: "small", cn: "小的" },
      { en: "book", cn: "书" },
      { en: "glass", cn: "杯子" },
      { en: "red", cn: "红色的" },
      { en: "bottle", cn: "瓶子" }
    ]
  },
  23: {
    title: "Lesson 23: Which glasses?",
    words: [
      { en: "shelf", cn: "架子" },
      { en: "on", cn: "在...上" },
      { en: "desk", cn: "桌子" },
      { en: "table", cn: "桌子" },
      { en: "plate", cn: "盘子" },
      { en: "cupboard", cn: "碗柜" },
      { en: "cigarette", cn: "香烟" },
      { en: "television", cn: "电视" },
      { en: "floor", cn: "地板" },
      { en: "magazine", cn: "杂志" }
    ]
  },
  25: {
    title: "Lesson 25: Mrs. Smith's kitchen.",
    words: [
      { en: "kitchen", cn: "厨房" },
      { en: "refrigerator", cn: "冰箱" },
      { en: "electric", cn: "电的" },
      { en: "cooker", cn: "炉灶" },
      { en: "middle", cn: "中间" },
      { en: "room", cn: "房间" },
      { en: "left", cn: "左边" },
      { en: "right", cn: "右边" },
      { en: "cup", cn: "杯子" },
      { en: "where", cn: "哪里" }
    ]
  },
  27: {
    title: "Lesson 27: Mrs. Smith's living room.",
    words: [
      { en: "living", cn: "客厅的" },
      { en: "near", cn: "靠近" },
      { en: "window", cn: "窗户" },
      { en: "armchair", cn: "扶手椅" },
      { en: "door", cn: "门" },
      { en: "picture", cn: "图画" },
      { en: "wall", cn: "墙" },
      { en: "trousers", cn: "裤子" }
    ]
  },
  29: {
    title: "Lesson 29: Come in, Amy!",
    words: [
      { en: "shut", cn: "关" },
      { en: "bedroom", cn: "卧室" },
      { en: "untidy", cn: "不整洁的" },
      { en: "must", cn: "必须" },
      { en: "open", cn: "打开" },
      { en: "air", cn: "使...通风" },
      { en: "put", cn: "放" },
      { en: "clothes", cn: "衣服" },
      { en: "wardrobe", cn: "衣柜" },
      { en: "dust", cn: "掸灰尘" },
      { en: "sweep", cn: "扫" }
    ]
  },
  31: {
    title: "Lesson 31: Where's Sally?",
    words: [
      { en: "garden", cn: "花园" },
      { en: "under", cn: "在...下" },
      { en: "tree", cn: "树" },
      { en: "climb", cn: "攀爬" },
      { en: "who", cn: "谁" },
      { en: "run", cn: "跑" },
      { en: "across", cn: "横穿" },
      { en: "grass", cn: "草地" },
      { en: "after", cn: "在...之后" },
      { en: "cat", cn: "猫" },
      { en: "dog", cn: "狗" }
    ]
  },
  33: {
    title: "Lesson 33: A fine day.",
    words: [
      { en: "day", cn: "天" },
      { en: "cloud", cn: "云" },
      { en: "sky", cn: "天空" },
      { en: "sun", cn: "太阳" },
      { en: "shine", cn: "照耀" },
      { en: "family", cn: "家庭" },
      { en: "walk", cn: "走路" },
      { en: "over", cn: "越过" },
      { en: "bridge", cn: "桥" },
      { en: "boat", cn: "船" },
      { en: "river", cn: "河" },
      { en: "ship", cn: "轮船" },
      { en: "fly", cn: "飞" },
      { en: "aeroplane", cn: "飞机" }
    ]
  },
  35: {
    title: "Lesson 35: Our village.",
    words: [
      { en: "village", cn: "村庄" },
      { en: "valley", cn: "山谷" },
      { en: "between", cn: "在...之间" },
      { en: "hill", cn: "小山" },
      { en: "another", cn: "另一个" },
      { en: "wife", cn: "妻子" },
      { en: "along", cn: "沿着" },
      { en: "bank", cn: "河岸" },
      { en: "water", cn: "水" },
      { en: "swim", cn: "游泳" },
      { en: "building", cn: "建筑物" },
      { en: "park", cn: "公园" },
      { en: "beside", cn: "在...旁边" },
      { en: "into", cn: "进入" }
    ]
  },
  37: {
    title: "Lesson 37: Making a bookcase.",
    words: [
      { en: "work", cn: "工作" },
      { en: "hard", cn: "努力地" },
      { en: "make", cn: "制作" },
      { en: "bookcase", cn: "书架" },
      { en: "hammer", cn: "锤子" },
      { en: "paint", cn: "上漆" },
      { en: "homework", cn: "家庭作业" },
      { en: "listen", cn: "听" },
      { en: "dish", cn: "盘子" }
    ]
  },
  39: {
    title: "Lesson 39: Don't drop it!",
    words: [
      { en: "front", cn: "前面" },
      { en: "careful", cn: "小心的" },
      { en: "vase", cn: "花瓶" },
      { en: "drop", cn: "掉落" },
      { en: "flower", cn: "花" },
      { en: "show", cn: "展示" },
      { en: "send", cn: "寄送" },
      { en: "take", cn: "拿" }
    ]
  },
  41: {
    title: "Lesson 41: Penny's bag.",
    words: [
      { en: "cheese", cn: "奶酪" },
      { en: "bread", cn: "面包" },
      { en: "soap", cn: "肥皂" },
      { en: "chocolate", cn: "巧克力" },
      { en: "sugar", cn: "糖" },
      { en: "coffee", cn: "咖啡" },
      { en: "tea", cn: "茶" },
      { en: "tobacco", cn: "烟草" }
    ]
  },
  43: {
    title: "Lesson 43: Hurry up!",
    words: [
      { en: "hurry", cn: "匆忙" },
      { en: "cut", cn: "切" },
      { en: "ready", cn: "准备好的" },
      { en: "breakfast", cn: "早餐" },
      { en: "meal", cn: "一顿饭" },
      { en: "minute", cn: "分钟" },
      { en: "time", cn: "时间" }
    ]
  },
  45: {
    title: "Lesson 45: The boss's letter.",
    words: [
      { en: "boss", cn: "老板" },
      { en: "minute", cn: "分钟" },
      { en: "ask", cn: "问" },
      { en: "hand", cn: "递给" },
      { en: "type", cn: "打字" },
      { en: "letter", cn: "信" },
      { en: "next", cn: "下一个" },
      { en: "door", cn: "门" },
      { en: "lift", cn: "电梯" }
    ]
  },
  47: {
    title: "Lesson 47: A cup of coffee.",
    words: [
      { en: "like", cn: "喜欢" },
      { en: "want", cn: "想要" },
      { en: "fresh", cn: "新鲜的" },
      { en: "egg", cn: "鸡蛋" },
      { en: "butter", cn: "黄油" },
      { en: "pure", cn: "纯的" },
      { en: "honey", cn: "蜂蜜" },
      { en: "ripe", cn: "成熟的" },
      { en: "banana", cn: "香蕉" },
      { en: "jam", cn: "果酱" },
      { en: "orange", cn: "橙子" },
      { en: "beer", cn: "啤酒" },
      { en: "wine", cn: "葡萄酒" },
      { en: "choice", cn: "选择" }
    ]
  },
  49: {
    title: "Lesson 49: At the butcher's.",
    words: [
      { en: "butcher", cn: "肉店" },
      { en: "meat", cn: "肉" },
      { en: "beef", cn: "牛肉" },
      { en: "lamb", cn: "羊肉" },
      { en: "husband", cn: "丈夫" },
      { en: "steak", cn: "牛排" },
      { en: "mince", cn: "肉馅" },
      { en: "chicken", cn: "鸡" },
      { en: "tell", cn: "告诉" },
      { en: "truth", cn: "真相" },
      { en: "either", cn: "也（否定）" }
    ]
  },
  2: {
    title: "Lesson 2: Is this your...?",
    words: [
      { en: "pen", cn: "钢笔" },
      { en: "pencil", cn: "铅笔" },
      { en: "book", cn: "书" },
      { en: "watch", cn: "手表" },
      { en: "car", cn: "汽车" },
      { en: "house", cn: "房子" }
    ]
  },
  4: {
    title: "Lesson 4: Is this your...?",
    words: [
      { en: "suit", cn: "西装" },
      { en: "school", cn: "学校" },
      { en: "skirt", cn: "裙子" },
      { en: "blouse", cn: "女衬衫" }
    ]
  },
  6: {
    title: "Lesson 6: What make is it?",
    words: [
      { en: "make", cn: "产品" },
      { en: "English", cn: "英国的" },
      { en: "American", cn: "美国的" },
      { en: "Swedish", cn: "瑞典的" }
    ]
  },
  8: {
    title: "Lesson 8: What's your job?",
    words: [
      { en: "policeman", cn: "警察" },
      { en: "policewoman", cn: "女警察" },
      { en: "taxi", cn: "出租车" },
      { en: "driver", cn: "司机" },
      { en: "nurse", cn: "护士" },
      { en: "mechanic", cn: "机械师" },
      { en: "hairdresser", cn: "理发师" },
      { en: "housewife", cn: "家庭主妇" },
      { en: "milkman", cn: "送奶工" },
      { en: "hostess", cn: "空姐" },
      { en: "postman", cn: "邮递员" }
    ]
  },
  10: {
    title: "Lesson 10: Look at...",
    words: [
      { en: "fat", cn: "胖的" },
      { en: "thin", cn: "瘦的" },
      { en: "tall", cn: "高的" },
      { en: "short", cn: "矮的" },
      { en: "dirty", cn: "脏的" },
      { en: "clean", cn: "干净的" },
      { en: "hot", cn: "热的" },
      { en: "cold", cn: "冷的" },
      { en: "old", cn: "旧的" },
      { en: "young", cn: "年轻的" },
      { en: "busy", cn: "忙碌的" },
      { en: "lazy", cn: "懒惰的" }
    ]
  },
  12: {
    title: "Lesson 12: Whose is this?",
    words: [
      { en: "father", cn: "父亲" },
      { en: "mother", cn: "母亲" },
      { en: "sister", cn: "姐妹" },
      { en: "brother", cn: "兄弟" },
      { en: "his", cn: "他的" },
      { en: "her", cn: "她的" },
      { en: "tie", cn: "领带" }
    ]
  },
  14: {
    title: "Lesson 14: What colour's your...?",
    words: [
      { en: "orange", cn: "橙色的" },
      { en: "grey", cn: "灰色的" },
      { en: "black", cn: "黑色的" },
      { en: "yellow", cn: "黄色的" },
      { en: "colour", cn: "颜色" }
    ]
  },
  16: {
    title: "Lesson 16: Are you...?",
    words: [
      { en: "Russian", cn: "俄罗斯的" },
      { en: "Dutch", cn: "荷兰的" },
      { en: "Norwegian", cn: "挪威的" },
      { en: "Danish", cn: "丹麦的" },
      { en: "these", cn: "这些" },
      { en: "red", cn: "红色的" }
    ]
  },
  18: {
    title: "Lesson 18: What are their jobs?",
    words: [
      { en: "custom", cn: "海关" },
      { en: "officer", cn: "官员" },
      { en: "girl", cn: "女孩" }
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
      { en: "grandfather", cn: "祖父" },
      { en: "grandmother", cn: "祖母" }
    ]
  },
  22: {
    title: "Lesson 22: Give me/him/her/us/them...",
    words: [
      { en: "empty", cn: "空的" },
      { en: "full", cn: "满的" },
      { en: "tin", cn: "罐头" },
      { en: "knife", cn: "刀" },
      { en: "fork", cn: "叉子" },
      { en: "spoon", cn: "勺子" },
      { en: "sharp", cn: "锋利的" },
      { en: "blunt", cn: "钝的" },
      { en: "box", cn: "盒子" }
    ]
  },
  24: {
    title: "Lesson 24: Give me/him/her/us/them some...",
    words: [
      { en: "some", cn: "一些" },
      { en: "any", cn: "任何" },
      { en: "newspaper", cn: "报纸" },
      { en: "stereo", cn: "音响" },
      { en: "bed", cn: "床" }
    ]
  },
  26: {
    title: "Lesson 26: Where is it?",
    words: [
      { en: "in", cn: "在...里" },
      { en: "chair", cn: "椅子" },
      { en: "pencil", cn: "铅笔" }
    ]
  },
  28: {
    title: "Lesson 28: Where are they?",
    words: [
      { en: "there", cn: "那里" },
      { en: "those", cn: "那些" },
      { en: "near", cn: "靠近" }
    ]
  },
  30: {
    title: "Lesson 30: What must I do?",
    words: [
      { en: "empty", cn: "倒空" },
      { en: "read", cn: "读" },
      { en: "sharpen", cn: "削尖" },
      { en: "clean", cn: "清洁" },
      { en: "turn", cn: "转动" },
      { en: "tap", cn: "水龙头" }
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
      { en: "cook", cn: "做饭" },
      { en: "milk", cn: "牛奶" }
    ]
  },
  34: {
    title: "Lesson 34: What are they doing?",
    words: [
      { en: "sleep", cn: "睡觉" },
      { en: "shave", cn: "刮脸" },
      { en: "cry", cn: "哭" },
      { en: "wash", cn: "洗" },
      { en: "wait", cn: "等待" },
      { en: "jump", cn: "跳" }
    ]
  },
  36: {
    title: "Lesson 36: Where...?",
    words: [
      { en: "beside", cn: "在...旁边" },
      { en: "off", cn: "离开" },
      { en: "school", cn: "学校" }
    ]
  },
  38: {
    title: "Lesson 38: What are you going to do?",
    words: [
      { en: "going", cn: "将要" },
      { en: "tonight", cn: "今晚" },
      { en: "evening", cn: "晚上" }
    ]
  },
  40: {
    title: "Lesson 40: What are you going to do?",
    words: [
      { en: "show", cn: "展示" },
      { en: "send", cn: "寄送" },
      { en: "take", cn: "拿" },
      { en: "penny", cn: "便士" }
    ]
  },
  42: {
    title: "Lesson 42: Is there a/any...?",
    words: [
      { en: "bird", cn: "鸟" },
      { en: "any", cn: "任何" },
      { en: "some", cn: "一些" }
    ]
  },
  44: {
    title: "Lesson 44: Are there any...?",
    words: [
      { en: "find", cn: "发现" },
      { en: "boil", cn: "煮沸" },
      { en: "fry", cn: "煎炸" }
    ]
  },
  46: {
    title: "Lesson 46: Can you...?",
    words: [
      { en: "lift", cn: "拿起" },
      { en: "cake", cn: "蛋糕" },
      { en: "biscuit", cn: "饼干" }
    ]
  },
  48: {
    title: "Lesson 48: Do you like...?",
    words: [
      { en: "fresh", cn: "新鲜的" },
      { en: "butter", cn: "黄油" },
      { en: "ripe", cn: "成熟的" },
      { en: "banana", cn: "香蕉" },
      { en: "jam", cn: "果酱" },
      { en: "honey", cn: "蜂蜜" }
    ]
  },
  50: {
    title: "Lesson 50: He likes... / He doesn't like...",
    words: [
      { en: "tomato", cn: "番茄" },
      { en: "potato", cn: "土豆" },
      { en: "cabbage", cn: "卷心菜" },
      { en: "lettuce", cn: "生菜" },
      { en: "pea", cn: "豌豆" },
      { en: "bean", cn: "豆角" },
      { en: "pear", cn: "梨" },
      { en: "grape", cn: "葡萄" },
      { en: "peach", cn: "桃子" }
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
      { en: "January", cn: "一月" },
      { en: "February", cn: "二月" },
      { en: "March", cn: "三月" },
      { en: "April", cn: "四月" },
      { en: "May", cn: "五月" },
      { en: "June", cn: "六月" },
      { en: "July", cn: "七月" },
      { en: "August", cn: "八月" },
      { en: "September", cn: "九月" },
      { en: "October", cn: "十月" },
      { en: "November", cn: "十一月" },
      { en: "December", cn: "十二月" }
    ]
  },
  53: {
    title: "Lesson 53: An interesting climate",
    words: [
      { en: "mild", cn: "温和的" },
      { en: "always", cn: "总是" },
      { en: "north", cn: "北方" },
      { en: "east", cn: "东方" },
      { en: "wet", cn: "潮湿的" },
      { en: "west", cn: "西方" },
      { en: "south", cn: "南方" },
      { en: "season", cn: "季节" },
      { en: "best", cn: "最好的" },
      { en: "night", cn: "夜晚" },
      { en: "rise", cn: "升起" },
      { en: "early", cn: "早" },
      { en: "set", cn: "落下" },
      { en: "late", cn: "晚" }
    ]
  },
  55: {
    title: "Lesson 55: The Sawyer family",
    words: [
      { en: "live", cn: "住，生活" },
      { en: "stay", cn: "呆在" },
      { en: "home", cn: "家" },
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
  57: {
    title: "Lesson 57: An unusual day",
    words: [
      { en: "o'clock", cn: "点钟" },
      { en: "shop", cn: "商店" },
      { en: "moment", cn: "片刻" }
    ]
  },
  59: {
    title: "Lesson 59: Is that all?",
    words: [
      { en: "envelope", cn: "信封" },
      { en: "writing paper", cn: "信纸" },
      { en: "shop assistant", cn: "售货员" },
      { en: "size", cn: "尺寸" },
      { en: "pad", cn: "信笺簿" },
      { en: "glue", cn: "胶水" },
      { en: "chalk", cn: "粉笔" },
      { en: "change", cn: "零钱" }
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
      { en: "remember", cn: "记得" },
      { en: "mouth", cn: "嘴" },
      { en: "tongue", cn: "舌头" },
      { en: "bad", cn: "坏的，严重的" },
      { en: "cold", cn: "感冒" },
      { en: "news", cn: "消息" }
    ]
  },
  63: {
    title: "Lesson 63: Thank you, doctor.",
    words: [
      { en: "better", cn: "更好" },
      { en: "certainly", cn: "当然" },
      { en: "get up", cn: "起床" },
      { en: "yet", cn: "还，仍" },
      { en: "rich", cn: "油腻的" },
      { en: "food", cn: "食物" },
      { en: "remain", cn: "保持" }
    ]
  },
  65: {
    title: "Lesson 65: Not a baby",
    words: [
      { en: "key", cn: "钥匙" },
      { en: "baby", cn: "婴儿" },
      { en: "hear", cn: "听见" },
      { en: "enjoy", cn: "享受" },
      { en: "yourself", cn: "你自己" },
      { en: "ourselves", cn: "我们自己" }
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
      { en: "keep", cn: "保持" },
      { en: "spend", cn: "度过" },
      { en: "weekend", cn: "周末" },
      { en: "Friday", cn: "星期五" },
      { en: "Saturday", cn: "星期六" },
      { en: "Sunday", cn: "星期日" },
      { en: "country", cn: "乡村" },
      { en: "lucky", cn: "幸运的" }
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
      { en: "just", cn: "正好" },
      { en: "finish", cn: "完成" },
      { en: "winner", cn: "获胜者" },
      { en: "behind", cn: "在...后面" },
      { en: "way", cn: "路途" }
    ]
  },
  71: {
    title: "Lesson 71: He's awful!",
    words: [
      { en: "awful", cn: "让人讨厌的" },
      { en: "telephone", cn: "打(电话)" },
      { en: "time", cn: "次(数)" },
      { en: "answer", cn: "接(电话)" },
      { en: "last", cn: "最后的" },
      { en: "phone", cn: "电话" },
      { en: "again", cn: "又" },
      { en: "say", cn: "说" }
    ]
  },
  73: {
    title: "Lesson 73: The way to King Street",
    words: [
      { en: "week", cn: "周" },
      { en: "London", cn: "伦敦" },
      { en: "suddenly", cn: "突然" },
      { en: "bus stop", cn: "公共汽车站" },
      { en: "smile", cn: "微笑" },
      { en: "pleasantly", cn: "愉快地" },
      { en: "understand", cn: "懂" },
      { en: "speak", cn: "讲" },
      { en: "hand", cn: "手" },
      { en: "pocket", cn: "衣袋" },
      { en: "phrasebook", cn: "短语手册" },
      { en: "phrase", cn: "短语" },
      { en: "slowly", cn: "缓慢地" }
    ]
  },
  75: {
    title: "Lesson 75: Uncomfortable shoes",
    words: [
      { en: "shoe", cn: "鞋子" },
      { en: "grandfather", cn: "祖父" },
      { en: "stare", cn: "盯着" }
    ]
  },
  77: {
    title: "Lesson 77: Terrible toothache",
    words: [
      { en: "appointment", cn: "约会" },
      { en: "urgent", cn: "紧急的" },
      { en: "till", cn: "直到" }
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
  52: {
    title: "Lesson 52: What nationality are they?",
    words: [
      { en: "the U.S.", cn: "美国" },
      { en: "Brazil", cn: "巴西" },
      { en: "Holland", cn: "荷兰" },
      { en: "England", cn: "英格兰" },
      { en: "France", cn: "法国" },
      { en: "Germany", cn: "德国" },
      { en: "Italy", cn: "意大利" },
      { en: "Norway", cn: "挪威" },
      { en: "Russia", cn: "俄罗斯" },
      { en: "Spain", cn: "西班牙" },
      { en: "Sweden", cn: "瑞典" }
    ]
  },
  54: {
    title: "Lesson 54: What nationality are they?",
    words: [
      { en: "Australia", cn: "澳大利亚" },
      { en: "Austrian", cn: "奥地利人" },
      { en: "Canada", cn: "加拿大" },
      { en: "Finland", cn: "芬兰" },
      { en: "India", cn: "印度" },
      { en: "Nigeria", cn: "尼日利亚" },
      { en: "Turkey", cn: "土耳其" },
      { en: "Poland", cn: "波兰" },
      { en: "Thailand", cn: "泰国" }
    ]
  },
  56: {
    title: "Lesson 56: What do they usually do?",
    words: [
      { en: "park", cn: "公园" },
      { en: "into", cn: "进入" },
      { en: "outside", cn: "外面" },
      { en: "library", cn: "图书馆" },
      { en: "drive", cn: "开车" },
      { en: "wash", cn: "洗" },
      { en: "work", cn: "工作" },
      { en: "shave", cn: "刮脸" }
    ]
  },
  58: {
    title: "Lesson 58: What's the time?",
    words: [
      { en: "o'clock", cn: "点钟" },
      { en: "car", cn: "小汽车" },
      { en: "train", cn: "火车" },
      { en: "ship", cn: "轮船" },
      { en: "plane", cn: "飞机" },
      { en: "foot", cn: "脚" },
      { en: "drink", cn: "喝" },
      { en: "read", cn: "读" },
      { en: "paint", cn: "画" }
    ]
  },
  60: {
    title: "Lesson 60: What's the time?",
    words: [
      { en: "church", cn: "教堂" },
      { en: "dairy", cn: "乳品店" },
      { en: "baker", cn: "面包师" },
      { en: "grocer", cn: "食品杂货商" }
    ]
  },
  62: {
    title: "Lesson 62: What's the matter with them?",
    words: [
      { en: "headache", cn: "头疼" },
      { en: "aspirin", cn: "阿司匹林" },
      { en: "earache", cn: "耳朵疼" },
      { en: "toothache", cn: "牙疼" },
      { en: "stomach ache", cn: "胃疼" },
      { en: "medicine", cn: "药" },
      { en: "temperature", cn: "温度" },
      { en: "flu", cn: "流感" },
      { en: "measles", cn: "麻疹" },
      { en: "mumps", cn: "腮腺炎" }
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
      { en: "quiet", cn: "安静的" },
      { en: "lean", cn: "倚靠" },
      { en: "window", cn: "窗户" }
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
  68: {
    title: "Lesson 68: What's the time?",
    words: [
      { en: "church", cn: "教堂" },
      { en: "dairy", cn: "乳品店" },
      { en: "grocer", cn: "食品杂货商" },
      { en: "baker", cn: "面包师" },
      { en: "hairdresser", cn: "理发师" }
    ]
  },
  70: {
    title: "Lesson 70: When did you...?",
    words: [
      { en: "stationer", cn: "文具商" },
      { en: "sell", cn: "卖" },
      { en: "write", cn: "写" },
      { en: "buy", cn: "买" },
      { en: "happen", cn: "发生" },
      { en: "ago", cn: "以前" }
    ]
  },
  72: {
    title: "Lesson 72: When did you...?",
    words: [
      { en: "travel", cn: "旅行" },
      { en: "offer", cn: "提供" },
      { en: "job", cn: "工作" },
      { en: "paint", cn: "油漆" },
      { en: "retire", cn: "退休" }
    ]
  },
  74: {
    title: "Lesson 74: What did they do?",
    words: [
      { en: "hurry", cn: "匆忙" },
      { en: "ticket office", cn: "售票处" },
      { en: "pity", cn: "遗憾" },
      { en: "exclaim", cn: "大声说" },
      { en: "return", cn: "退回" },
      { en: "railway", cn: "铁路" }
    ]
  },
  76: {
    title: "Lesson 76: When did you...?",
    words: [
      { en: "meeting", cn: "会议" },
      { en: "comfortable", cn: "舒适的" },
      { en: "lady", cn: "女士" },
      { en: "pair", cn: "一双" }
    ]
  },
  78: {
    title: "Lesson 78: When did you...?",
    words: [
      { en: "dentist", cn: "牙医" },
      { en: "nervous", cn: "紧张的" },
      { en: "pain", cn: "疼痛" },
      { en: "worse", cn: "更坏的" },
      { en: "appointment", cn: "预约" }
    ]
  },
  80: {
    title: "Lesson 80: I must go to the...",
    words: [
      { en: "shopping list", cn: "购物单" },
      { en: "need", cn: "需要" },
      { en: "already", cn: "已经" },
      { en: "quarter", cn: "四分之一" },
      { en: "pound", cn: "磅" },
      { en: "sugar", cn: "糖" },
      { en: "coffee", cn: "咖啡" },
      { en: "enough", cn: "足够的" }
    ]
  },
  81: {
    title: "Lesson 81: Roast beef and potatoes",
    words: [
      { en: "bath", cn: "洗澡" },
      { en: "nearly", cn: "几乎" },
      { en: "ready", cn: "准备好的" },
      { en: "dinner", cn: "正餐" },
      { en: "restaurant", cn: "餐馆" },
      { en: "roast", cn: "烤的" },
      { en: "breakfast", cn: "早餐" }
    ]
  },
  82: {
    title: "Lesson 82: I ate... / He ate...",
    words: [
      { en: "exercise", cn: "锻炼" },
      { en: "meal", cn: "一顿饭" },
      { en: "ago", cn: "以前" }
    ]
  },
  83: {
    title: "Lesson 83: Going on holiday",
    words: [
      { en: "mess", cn: "杂乱" },
      { en: "pack", cn: "打包" },
      { en: "suitcase", cn: "手提箱" },
      { en: "leave", cn: "离开" },
      { en: "already", cn: "已经" }
    ]
  },
  84: {
    title: "Lesson 84: Have you had...?",
    words: [
      { en: "church", cn: "教堂" },
      { en: "yet", cn: "还" },
      { en: "ever", cn: "曾经" }
    ]
  },
  85: {
    title: "Lesson 85: Paris in the spring",
    words: [
      { en: "Paris", cn: "巴黎" },
      { en: "cinema", cn: "电影院" },
      { en: "film", cn: "电影" },
      { en: "beautiful", cn: "美丽的" },
      { en: "city", cn: "城市" },
      { en: "never", cn: "从来没有" },
      { en: "ever", cn: "曾经" }
    ]
  },
  86: {
    title: "Lesson 86: What have you done?",
    words: [
      { en: "paint", cn: "油漆" },
      { en: "move", cn: "搬动" },
      { en: "bookcase", cn: "书架" }
    ]
  },
  87: {
    title: "Lesson 87: A car crash",
    words: [
      { en: "attend", cn: "参加" },
      { en: "funeral", cn: "葬礼" },
      { en: "church", cn: "教堂" },
      { en: "recently", cn: "最近" },
      { en: "crash", cn: "碰撞" }
    ]
  },
  88: {
    title: "Lesson 88: Have you... yet?",
    words: [
      { en: "yet", cn: "还，仍" },
      { en: "repair", cn: "修理" }
    ]
  },
  89: {
    title: "Lesson 89: For sale",
    words: [
      { en: "believe", cn: "相信" },
      { en: "may", cn: "可以" },
      { en: "how long", cn: "多长" },
      { en: "since", cn: "自从" },
      { en: "why", cn: "为什么" },
      { en: "sell", cn: "卖" },
      { en: "because", cn: "因为" },
      { en: "retire", cn: "退休" },
      { en: "cost", cn: "花费" },
      { en: "pound", cn: "英镑" },
      { en: "worth", cn: "值" }
    ]
  },
  90: {
    title: "Lesson 90: Have you... yet?",
    words: [
      { en: "kettle", cn: "水壶" },
      { en: "boss", cn: "老板" }
    ]
  },
  91: {
    title: "Lesson 91: Poor Ian!",
    words: [
      { en: "still", cn: "还，仍然" },
      { en: "move", cn: "搬家" },
      { en: "miss", cn: "想念" },
      { en: "neighbour", cn: "邻居" },
      { en: "person", cn: "人" },
      { en: "poor", cn: "可怜的" },
      { en: "plenty", cn: "大量" }
    ]
  },
  92: {
    title: "Lesson 92: When did you...?",
    words: [
      { en: "pilot", cn: "飞行员" },
      { en: "return", cn: "返回" },
      { en: "New York", cn: "纽约" },
      { en: "Tokyo", cn: "东京" },
      { en: "Madrid", cn: "马德里" },
      { en: "fly", cn: "飞" }
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
      { en: "fly", cn: "飞" }
    ]
  },
  94: {
    title: "Lesson 94: When did you...?",
    words: [
      { en: "Sydney", cn: "悉尼" },
      { en: "Rome", cn: "罗马" },
      { en: "Athens", cn: "雅典" },
      { en: "Berlin", cn: "柏林" },
      { en: "Bombay", cn: "孟买" }
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
      { en: "station", cn: "车站" },
      { en: "catch", cn: "赶上" },
      { en: "miss", cn: "错过" }
    ]
  },
  96: {
    title: "Lesson 96: What's the exact time?",
    words: [
      { en: "exact", cn: "准确的" },
      { en: "half", cn: "一半" },
      { en: "past", cn: "过" },
      { en: "quarter", cn: "一刻钟" }
    ]
  },
  97: {
    title: "Lesson 97: A small blue case",
    words: [
      { en: "leave", cn: "遗留" },
      { en: "describe", cn: "描述" },
      { en: "zip", cn: "拉链" },
      { en: "label", cn: "标签" },
      { en: "handle", cn: "把手" },
      { en: "address", cn: "地址" },
      { en: "pence", cn: "便士" },
      { en: "belong", cn: "属于" }
    ]
  },
  98: {
    title: "Lesson 98: Whose is it?",
    words: [
      { en: "whose", cn: "谁的" },
      { en: "blue", cn: "蓝色的" },
      { en: "perhaps", cn: "也许" },
      { en: "catch", cn: "抓住,赶上" }
    ]
  },
  99: {
    title: "Lesson 99: Ow!",
    words: [
      { en: "ow", cn: "哎哟" },
      { en: "slip", cn: "滑倒" },
      { en: "fall", cn: "落下" },
      { en: "downstairs", cn: "下楼" },
      { en: "hurt", cn: "伤害" },
      { en: "back", cn: "背" },
      { en: "stand up", cn: "站起来" },
      { en: "help", cn: "帮助" },
      { en: "at once", cn: "立刻" }
    ]
  },
  100: {
    title: "Lesson 100: He says that...",
    words: [
      { en: "age", cn: "年龄" },
      { en: "balcony", cn: "阳台" },
      { en: "guess", cn: "猜" }
    ]
  },
  101: {
    title: "Lesson 101: A card from Jimmy",
    words: [
      { en: "Scotland", cn: "苏格兰" },
      { en: "card", cn: "明信片" },
      { en: "youth", cn: "年轻人" },
      { en: "hostel", cn: "招待所" },
      { en: "association", cn: "协会" },
      { en: "soon", cn: "不久" },
      { en: "write", cn: "写" }
    ]
  },
  102: {
    title: "Lesson 102: He says he...",
    words: [
      { en: "exam", cn: "考试" },
      { en: "pass", cn: "通过" },
      { en: "fail", cn: "未及格" },
      { en: "mathematics", cn: "数学" },
      { en: "question", cn: "问题" },
      { en: "easy", cn: "容易的" },
      { en: "enough", cn: "足够的" }
    ]
  },
  103: {
    title: "Lesson 103: The French test",
    words: [
      { en: "exam", cn: "考试" },
      { en: "pass", cn: "及格" },
      { en: "mathematics", cn: "数学" },
      { en: "question", cn: "问题" },
      { en: "easy", cn: "容易的" },
      { en: "enough", cn: "足够的" },
      { en: "paper", cn: "考卷" },
      { en: "fail", cn: "未及格" },
      { en: "answer", cn: "回答" },
      { en: "mark", cn: "分数" },
      { en: "rest", cn: "其他的" },
      { en: "difficult", cn: "困难的" },
      { en: "hate", cn: "讨厌" },
      { en: "low", cn: "低的" },
      { en: "cheer", cn: "振作" },
      { en: "top", cn: "上方" }
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
      { en: "stale", cn: "变味的" },
      { en: "low", cn: "矮的" },
      { en: "loud", cn: "大声的" },
      { en: "high", cn: "高的" }
    ]
  },
  105: {
    title: "Lesson 105: Full of mistakes",
    words: [
      { en: "spell", cn: "拼写" },
      { en: "intelligent", cn: "聪明的" },
      { en: "mistake", cn: "错误" },
      { en: "present", cn: "礼物" },
      { en: "dictionary", cn: "词典" },
      { en: "correct", cn: "改正" },
      { en: "keep", cn: "保留" },
      { en: "piece", cn: "张" },
      { en: "advice", cn: "忠告" }
    ]
  },
  106: {
    title: "Lesson 106: I want you to...",
    words: [
      { en: "want", cn: "想要" },
      { en: "tell", cn: "告诉" },
      { en: "type", cn: "打字" },
      { en: "letter", cn: "信" }
    ]
  },
  107: {
    title: "Lesson 107: It's too small",
    words: [
      { en: "madam", cn: "夫人" },
      { en: "smart", cn: "漂亮的" },
      { en: "suit", cn: "一套衣服" },
      { en: "pretty", cn: "漂亮的" },
      { en: "same", cn: "相同的" },
      { en: "style", cn: "样式" },
      { en: "colour", cn: "颜色" },
      { en: "size", cn: "尺码" },
      { en: "try", cn: "试穿" },
      { en: "shorter", cn: "更短的" },
      { en: "longer", cn: "更长的" }
    ]
  },
  108: {
    title: "Lesson 108: How do they compare?",
    words: [
      { en: "older", cn: "更老的" },
      { en: "younger", cn: "更年轻的" },
      { en: "taller", cn: "更高的" },
      { en: "heavier", cn: "更重的" },
      { en: "lighter", cn: "更轻的" },
      { en: "thinner", cn: "更瘦的" },
      { en: "fatter", cn: "更胖的" }
    ]
  },
  109: {
    title: "Lesson 109: A good idea",
    words: [
      { en: "idea", cn: "主意" },
      { en: "dark", cn: "黑暗的" },
      { en: "a few", cn: "几个" },
      { en: "sell", cn: "卖" },
      { en: "believe", cn: "相信" },
      { en: "whole", cn: "整个" },
      { en: "myself", cn: "我自己" },
      { en: "front", cn: "前面" }
    ]
  },
  110: {
    title: "Lesson 110: How do they compare?",
    words: [
      { en: "most", cn: "最" },
      { en: "beautiful", cn: "美丽的" },
      { en: "comfortable", cn: "舒适的" },
      { en: "interesting", cn: "有趣的" },
      { en: "modern", cn: "现代的" },
      { en: "different", cn: "不同的" },
      { en: "important", cn: "重要的" }
    ]
  },
  111: {
    title: "Lesson 111: The most expensive model",
    words: [
      { en: "model", cn: "型号，式样" },
      { en: "afford", cn: "付得起" },
      { en: "deposit", cn: "定金" },
      { en: "instalment", cn: "分期付款" },
      { en: "price", cn: "价格" },
      { en: "millionaire", cn: "百万富翁" }
    ]
  },
  112: {
    title: "Lesson 112: How do they compare?",
    words: [
      { en: "buy", cn: "买" },
      { en: "cost", cn: "花费" },
      { en: "pay", cn: "付钱" },
      { en: "cheap", cn: "便宜的" },
      { en: "save", cn: "攒钱" },
      { en: "television", cn: "电视机" }
    ]
  },
  113: {
    title: "Lesson 113: Small change",
    words: [
      { en: "conductor", cn: "售票员" },
      { en: "fare", cn: "车费" },
      { en: "change", cn: "零钱，找给的钱" },
      { en: "note", cn: "纸币" }
    ]
  },
  114: {
    title: "Lesson 114: I've got none",
    words: [
      { en: "passenger", cn: "乘客" },
      { en: "none", cn: "没有任何东西" },
      { en: "neither", cn: "也不" },
      { en: "get off", cn: "下车" },
      { en: "tramp", cn: "流浪汉" },
      { en: "except", cn: "除...外" }
    ]
  },
  115: {
    title: "Lesson 115: Knock, knock!",
    words: [
      { en: "anyone", cn: "任何人" },
      { en: "knock", cn: "敲" },
      { en: "everything", cn: "一切事物" },
      { en: "quiet", cn: "安静的" },
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
      { en: "asleep", cn: "睡着的" },
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
      { en: "toilet", cn: "厕所" }
    ]
  },
  118: {
    title: "Lesson 118: What were you doing?",
    words: [
      { en: "ring", cn: "响" },
      { en: "garden", cn: "花园" },
      { en: "sleep", cn: "睡觉" }
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
      { en: "voice", cn: "说话声" },
      { en: "parrot", cn: "鹦鹉" }
    ]
  },
  120: {
    title: "Lesson 120: It had already happened",
    words: [
      { en: "jump", cn: "跳" },
      { en: "drop", cn: "掉下" },
      { en: "frighten", cn: "使害怕" },
      { en: "run away", cn: "逃跑" }
    ]
  },
  121: {
    title: "Lesson 121: The man in a hat",
    words: [
      { en: "customer", cn: "顾客" },
      { en: "forget", cn: "忘记" },
      { en: "manager", cn: "经理" },
      { en: "serve", cn: "照应" },
      { en: "counter", cn: "柜台" },
      { en: "recognize", cn: "认出" }
    ]
  },
  122: {
    title: "Lesson 122: Who (whom), which and that",
    words: [
      { en: "road", cn: "路" },
      { en: "stand", cn: "站立" },
      { en: "man", cn: "男人" }
    ]
  },
  123: {
    title: "Lesson 123: A trip to Australia",
    words: [
      { en: "during", cn: "在...期间" },
      { en: "trip", cn: "旅行" },
      { en: "travel", cn: "履行" },
      { en: "offer", cn: "提供" },
      { en: "job", cn: "工作" },
      { en: "guess", cn: "猜" },
      { en: "grow", cn: "长，生长" },
      { en: "beard", cn: "胡子" }
    ]
  },
  124: {
    title: "Lesson 124: (Who) / (whom), (which) and (that)",
    words: [
      { en: "water", cn: "给...浇水" },
      { en: "plant", cn: "植物" },
      { en: "airport", cn: "机场" },
      { en: "meet", cn: "遇见" }
    ]
  },
  125: {
    title: "Lesson 125: Tea for two",
    words: [
      { en: "water", cn: "水" },
      { en: "terribly", cn: "非常" },
      { en: "dry", cn: "干燥的" },
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
      { en: "read", cn: "读" }
    ]
  },
  128: {
    title: "Lesson 128: He can't be...",
    words: [
      { en: "ill", cn: "病了" },
      { en: "busy", cn: "忙" }
    ]
  },
  129: {
    title: "Lesson 129: Seventy miles an hour",
    words: [
      { en: "wave", cn: "招手" },
      { en: "track", cn: "跑道" },
      { en: "mile", cn: "英里" },
      { en: "overtake", cn: "从后面超越" },
      { en: "speed limit", cn: "限速" },
      { en: "dream", cn: "做梦" },
      { en: "sign", cn: "牌子" },
      { en: "driving licence", cn: "驾驶执照" },
      { en: "charge", cn: "罚款" },
      { en: "darling", cn: "亲爱的（用作称呼）" }
    ]
  },
  130: {
    title: "Lesson 130: He can't have been...",
    words: [
      { en: "police", cn: "警察" },
      { en: "catch", cn: "抓住" }
    ]
  },
  131: {
    title: "Lesson 131: Don't be so sure!",
    words: [
      { en: "Egypt", cn: "埃及" },
      { en: "abroad", cn: "在国外" },
      { en: "worry", cn: "担忧" },
      { en: "reporter", cn: "记者" }
    ]
  },
  132: {
    title: "Lesson 132: He may be... / He may have been...",
    words: [
      { en: "airport", cn: "机场" },
      { en: "arrive", cn: "到达" }
    ]
  },
  133: {
    title: "Lesson 133: Sensational news!",
    words: [
      { en: "sensational", cn: "爆炸性的，起轰动效果的" },
      { en: "footstep", cn: "脚步声" },
      { en: "space", cn: "宇宙，空间" },
      { en: "build", cn: "建" },
      { en: "machine", cn: "机器" },
      { en: "travel", cn: "旅行" }
    ]
  },
  134: {
    title: "Lesson 134: He said (that) he...",
    words: [
      { en: "report", cn: "报道" },
      { en: "invent", cn: "发明" }
    ]
  },
  135: {
    title: "Lesson 135: The latest report",
    words: [
      { en: "future", cn: "未来" },
      { en: "get married", cn: "结婚" },
      { en: "hotel", cn: "饭店" },
      { en: "latest", cn: "最新的" },
      { en: "introduce", cn: "介绍" }
    ]
  },
  136: {
    title: "Lesson 136: He said (that) he...",
    words: [
      { en: "tell", cn: "告诉" },
      { en: "speak", cn: "说" }
    ]
  },
  137: {
    title: "Lesson 137: A pleasant dream",
    words: [
      { en: "football", cn: "足球" },
      { en: "pool", cn: "赌注" },
      { en: "win", cn: "赢" },
      { en: "world", cn: "世界" },
      { en: "poor", cn: "可怜的" },
      { en: "depend", cn: "依靠" }
    ]
  },
  138: {
    title: "Lesson 138: If...",
    words: [
      { en: "stay", cn: "停留" },
      { en: "rain", cn: "下雨" },
      { en: "miss", cn: "错过" }
    ]
  },
  139: {
    title: "Lesson 139: Is that you, John?",
    words: [
      { en: "extra", cn: "额外的" },
      { en: "engineer", cn: "工程师" },
      { en: "overseas", cn: "海外的" },
      { en: "engineering", cn: "工程" },
      { en: "company", cn: "公司" },
      { en: "line", cn: "线路" }
    ]
  },
  140: {
    title: "Lesson 140: He wants to know if/why/what/when",
    words: [
      { en: "write", cn: "写" },
      { en: "know", cn: "知道" }
    ]
  },
  141: {
    title: "Lesson 141: Sally's first train ride",
    words: [
      { en: "excited", cn: "兴奋的" },
      { en: "get on", cn: "上车" },
      { en: "middle-aged", cn: "中年的" },
      { en: "opposite", cn: "在对面" },
      { en: "curiously", cn: "好奇地" },
      { en: "funny", cn: "可笑的，滑稽的" },
      { en: "powder", cn: "香粉" },
      { en: "compact", cn: "带镜子的粉盒" },
      { en: "kindly", cn: "和蔼地" },
      { en: "ugly", cn: "丑陋的" },
      { en: "amused", cn: "被逗乐的" },
      { en: "smile", cn: "微笑" }
    ]
  },
  142: {
    title: "Lesson 142: Someone invited...",
    words: [
      { en: "worry", cn: "担忧" },
      { en: "invite", cn: "邀请" }
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
      { en: "visitor", cn: "参观者，游客" },
      { en: "tidy", cn: "整洁的" },
      { en: "litter", cn: "杂乱的东西" },
      { en: "litter basket", cn: "废物筐" },
      { en: "place", cn: "放" },
      { en: "throw", cn: "扔" },
      { en: "rubbish", cn: "垃圾" },
      { en: "count", cn: "数，点" },
      { en: "cover", cn: "覆盖" },
      { en: "piece", cn: "碎片" },
      { en: "tyre", cn: "轮胎" },
      { en: "rusty", cn: "生锈的" },
      { en: "among", cn: "在...之间" },
      { en: "prosecute", cn: "依法处置" }
    ]
  },
  144: {
    title: "Lesson 144: He hasn't been served yet",
    words: [
      { en: "serve", cn: "服务" }
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
