import App from '../Root';

/** *** 点餐模块 **** */
const GeneralQRCode = () => import(/* webpackChunkName: "GeneralQRCode" */ '../pages/qrcode/GeneralQRCode');
const PersonNum = () => import(/* webpackChunkName: "PersonNum" */ '../pages/qrcode/PersonNum');
const NearbyShop = () => import(/* webpackChunkName: "Shop" */ '../pages/shop/ShopList');
const ShopSearch = () => import(/* webpackChunkName: "ShopSearch" */ '../pages/shop/ShopSearch');
const Menu = () => import(/* webpackChunkName: "newMenu" */ '../pages/menu/index.vue');
const ShopDetail = () => import(/* webpackChunkName: "ShopDetail" */ '../pages/shop/shopDetail');
const ConfirmOrder = () => import(/* webpackChunkName: "ConfirmOrder" */ '../pages/order/ConfirmOrder');
const ConfirmPay = () => import(/* webpackChunkName: "ConfirmPay" */ '../pages/payment/ConfirmPay');
const Cdmconfirmpay = () => import(/* webpackChunkName: "Cdmconfirmpay" */ '../pages/payment/Cdmconfirmpay')
const ConfirmPayQuick = () => import(/* webpackChunkName: "ConfirmPay" */ '../pages/payment/ConfirmPayQuick');
const PayForAnother = () => import(/* webpackChunkName: "PayForAnother" */ '../pages/payment/PayForAnother');
const RequestPayment = () => import(/* webpackChunkName: "RequestPayment" */ '../pages/payment/RequestPayment');
const QuickPay = () => import(/* webpackChunkName: "QuickPay" */ '../pages/payment/QuickPay');
const PayStatus = () => import(/* webpackChunkName: "PayStatus" */ '../pages/payment/PayStatus');
const BrowserOpen = () => import(/* webpackChunkName: "BrowserOpen" */ '../pages/payment/BrowserOpen');
const AlreadyOrder = () => import(/* webpackChunkName: "AlreadyOrder" */ '../pages/order/AlreadyOrder');
const OrderStatus = () => import(/* webpackChunkName: "OrderStatus" */ '../pages/order/OrderStatus');
const DiscountConfirm = () => import(/* webpackChunkName: "DiscountConfirm" */ '../pages/order/DiscountConfirm');
const MealCardConfirm = () => import(/* webpackChunkName: "MealCard" */ '../pages/otherPay/mealCardDetail');
const MealCardPayStatus = () => import(/* webpackChunkName: "MealCard" */ '../pages/otherPay/mealCardPayStatus');
/** *** 打赏评价 **** */
const StaffServe = () => import(/* webpackChunkName: "StaffServe" */ '../pages/shop/StaffServe');
const GiveReward = () => import(/* webpackChunkName: "GiveReward" */ '../pages/shop/GiveReward');
const StaffEvaluate = () => import(/* webpackChunkName: "StaffEvaluate" */ '../pages/shop/StaffEvaluate');
/** *** 个人中心模块 **** */
const MemberCenter = () => import(/* webpackChunkName: "MemberCenter" */ '../pages/user/MemberCenter');
// 完善资料
const ActiveDetail = () => import(/* webpackChunkName: "ActiveDetail" */ '../pages/user/ActiveDetail');
const UserInfo = () => import(/* webpackChunkName: "UserInfo" */ '../pages/user/UserInfo');
const BoundPhone = () => import(/* webpackChunkName: "BoundPhone" */ '../pages/user/BoundPhone');
const DeliveryAddress = () => import(/* webpackChunkName: "DeliveryAddress" */ '../pages/user/DeliveryAddress');
// 优惠券
const Coupon = () => import(/* webpackChunkName: "Coupon" */ '../pages/coupon/Coupon');
const CouponRecord = () => import(/* webpackChunkName: "CouponRecord" */ '../pages/coupon/CouponRecord');
const CouponPackage = () => import(/* webpackChunkName: "CouponPackage" */ '../pages/coupon/CouponPackage');
const CouponPackageDetail = () => import(/* webpackChunkName: "CouponPackageDetail" */ '../pages/coupon/CouponPackageDetail');
const UserCouponPackage = () => import(/* webpackChunkName: "UserCouponPackage" */ '../pages/coupon/UserCouponPackage');
const Poster = () => import(/* webpackChunkName: "Poster" */ '../pages/coupon/Poster');
const CouponDetail = () => import(/* webpackChunkName: "CouponDetail" */ '../pages/coupon/CouponDetail');
const CouponPwd = () => import(/* webpackChunkName: "CouponPwd" */ '../pages/coupon/CouponPwd');
const CouponPaymentNum = () => import(/* webpackChunkName: "PaymentNum" */ '../pages/qrcode/PaymentNum');
const CouponShare = () => import(/* webpackChunkName: "CouponShare" */ '../pages/coupon/CouponShare');
const Refund = () => import(/* webpackChunkName: "Refund" */ '../pages/coupon/Refund');
const RefundExplain = () => import(/* webpackChunkName: "RefundExplain" */ '../pages/coupon/RefundExplain');
const RefundJump = () => import(/* webpackChunkName: "RefundJump" */ '../pages/coupon/RefundJump');
const Consumption = () => import(/* webpackChunkName: "Consumption" */ '../pages/coupon/Consumption');
// 地址
const MyAddress = () => import(/* webpackChunkName: "Address" */ '../pages/address/MyAddress');
const AddAddress = () => import(/* webpackChunkName: "AddAddress" */ '../pages/address/AddAddress');
const EditAddress = () => import(/* webpackChunkName: "EditAddress" */ '../pages/address/EditAddress');
const SelectAddress = () => import(/* webpackChunkName: "SelectAddress" */ '../pages/address/SelectAddress');
const SelectAddressLand = () => import(/* webpackChunkName: "SelectAddress" */ '../pages/address/map');
const AddressCitys = () => import(/* webpackChunkName: "AddressCitys" */ '../pages/address/Citys');
// 订单
const MyOrder = () => import(/* webpackChunkName: "Order" */ '../pages/order/MyOrder');
const Unsubscribe = () => import(/* webpackChunkName: "Unsubscribe" */ '../pages/order/Unsubscribe');
const Evaluate = () => import(/* webpackChunkName: "Evaluate" */ '../pages/order/Evaluate');
const OrderDetail = () => import(/* webpackChunkName: "OrderDetail" */ '../pages/order/OrderDetail');
const PreSettlement = () => import(/* webpackChunkName: "PreSettlement" */ '../pages/order/PreSettlement');
const PreStatement = () => import(/* webpackChunkName: "PreStatement" */ '../pages/order/PreStatement');
// 会员卡
const MemberCard = () => import(/* webpackChunkName: "MemberCard" */ '../pages/card/MemberCard');
const VerifyCard = () => import(/* webpackChunkName: "VerifyCard" */ '../pages/card/VerifyCard');
const CardServiceFee = () => import(/* webpackChunkName: "VerifyCard" */ '../pages/card/cardServiceFee');
const TelAreaCode = () => import(/* webpackChunkName: "TelAreaCode" */ '../pages/card/TelAreaCode');
const Finished = () => import(/* webpackChunkName: "Finished" */ '../pages/card/Finished');
const VipCenter = () => import(/* webpackChunkName: "VipCenter" */ '../pages/card/VipCenter');
const PaymentNum = () => import(/* webpackChunkName: "PaymentNum" */ '../pages/card/PaymentNum');
const MyIntegral = () => import(/* webpackChunkName: "MyIntegral" */ '../pages/card/MyIntegral');
const MemberEquity = () => import(/* webpackChunkName: "MemberEquity" */ '../pages/card/MemberEquity');
const HowUpgrade = () => import(/* webpackChunkName: "HowUpgrade" */ '../pages/card/HowUpgrade');
const VipLevelRules = () => import(/* webpackChunkName: "VipLevelRules" */ '../pages/card/VipLevelRules');
const ApplyShop = () => import(/* webpackChunkName: "ApplyShop" */ '../pages/card/ApplyShop');
const SetPassword = () => import(/* webpackChunkName: "SetPassword" */ '../pages/card/SetPassword');
const TransactionDetail = () => import(/* webpackChunkName: "TransactionDetail" */ '../pages/card/TransactionDetail');
const VipRemark = () => import('../pages/card/VipRemark');
const MoneyDetail = () => import(/* webpackChunkName: "MoneyDetail" */ '../pages/card/MoneyDetail');
const VipEmpowerment = () => import(/* webpackChunkName: "VipEmpowerment" */ '../pages/payment/vipEmpowerment');
const VipQuotaRecharge = () => import(/* webpackChunkName: "VipQuotaRecharge" */ '../pages/payment/vipQuotaRecharge');

// 会员活动
const MemberEvent = () => import(/* webpackChunkName: "MemberEvent" */ '../pages/user/_private/MemberEvent');
const EventCont = () => import(/* webpackChunkName: "EventCont" */ '../pages/user/_private/EventCont');
const EventFree = () => import(/* webpackChunkName: "User" */ '../pages/user/_private/EventFree');
const PointCard = () => import(/* webpackChunkName: "User" */ '../pages/user/PointCard');
const SignIn = () => import(/* webpackChunkName: "SignIn" */ '../pages/user/signIn');
// 推荐有礼
const RecommendInvite = () => import(/* webpackChunkName: "RecommendInvite" */ '../pages/recommend/RecommendInvite');
const RecommendByInvite = () => import(/* webpackChunkName: "RecommendByInvite" */ '../pages/recommend/RecommendByInvite');
const MyBonus = () => import(/* webpackChunkName: "MyBonus" */ '../pages/recommend/MyBonus');
const RegisterPhone = () => import(/* webpackChunkName: "RegisterPhone" */ '../pages/user/RegisterPhone');
// 分享裂变
const ShareFission = () => import(/* webpackChunkName: "ShareFission" */ '../pages/activity/ShareFission');
const RecommendPoster = () => import(/* webpackChunkName: "RecommendPoster" */ '../pages/recommend/RecommendPoster');
// 我的留言
const MessageBoard = () => import(/* webpackChunkName: "MessageBoard" */ '../pages/user/MessageBoard');
// 彩蛋猫外界需求 订单支付
// const GameCat = () => import(/* webpackChunkName: "GameCat" */ '../containers/GameCat/GameCat')
// const EggPay = () => import(/* webpackChunkName: "EggPay" */ '../containers/GameCat/EggPay')
const Gamecat = () => import(/* webpackChunkName: "GameCat" */ '../containers/GameCat/GameCat');
const GameCatPaySuccess = () => import(/* webpackChunkName: "GameCatPaySuccess" */ '../containers/GameCat/paySuccess');
// 聚合二维码h5页面入口
const QrH5D = () => import(/* webpackChunkName:'qrH5D' */ '../containers/qrH5/default.vue');
const QrH5 = () => import(/* webpackChunkName:'qrH5' */ '../containers/qrH5/index.vue');
/** *** 开发辅助模块 **** */
const MpAuthorization = () => import(/* webpackChunkName: "MpAuthorization" */ '../containers/DevTools/MpAuthorization');
const TestWebSocket = () => import(/* webpackChunkName: "TestWebSocket" */ '../containers/DevTools/webSocketTest');
const ClearCookie = () => import(/* webpackChunkName: "ClearCookie" */ '../containers/DevTools/ClearCookie');
const Mauth = () => import(/* webpackChunkName: "Mauth" */ '../containers/DevTools/Mauth');
const ClearCache = () => import(/* webpackChunkName: "Mauth" */ '../containers/DevTools/clearCache');
const BoundInfo = () => import(/* webpackChunkName: "BoundInfo" */ '../pages/shop/BoundInfo');
const QuickOrder = () => import(/* webpackChunkName: "QuickOrder" */ '../pages/order/QuickOrder');
// 软文分享朋友圈
const MenuShare = () => import('../pages/user/MenuShare');
// 404
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../components/ErrorPage/NotFound');
// 授权失败
const WarrantFaild = () => import(/* webpackChunkName: "WarrantFaild" */ '../components/ErrorPage/WarrantFaild');

const FreeTable = () => import(/* webpackChunkName: "FreeTable" */ '../components/ErrorPage/FreeTable');
// 超出最大距离的错误页面
const MaxDistance = () => import(/* webpackChunkName: "MaxDistance" */ '../components/ErrorPage/MaxDistance');
// 快应用落地页
const QuickAppLanding = () => import(/* webpackChunkName: "QuickApp" */ '../pages/quickappLanding/index');
const QuickAppVoucher = () => import(/* webpackChunkName: "QuickApp" */ '../pages/quickappLanding/voucher');

// 登录页面
const Login = () => import(/* webpackChunkName: "Login" */ '../pages/user/Login')
const LoginBPic = () => import(/* webpackChunkName: "Login" */ '../pages/user/LoginBPic')
// 独立获取
const TelAreaCodeNew = () => import(/* webpackChunkName: "TelAreaCode" */ '../pages/card/TelAreaCode');

const routes = [{
  path: '/',
  redirect: '/newm'
},
{
  path: '/newm/quickapp/vivo',
  component: QuickAppLanding,
  name: 'ViVoQuickAppLanding'
},
{
  path: '/newm/quickapp/voucher',
  component: QuickAppVoucher,
  name: 'QuickAppTickets'
},
{
  path: '/newm/mpAuthorization',
  component: MpAuthorization,
  name: 'MpAuthorization'
},
{
  path: '/newm/mauth',
  component: Mauth,
  name: 'Mauth'
},
{
  path: '/newm/clearCache',
  component: ClearCache,
  name: 'ClearCache'
},
{
  path: '/newm/clearCookie',
  component: ClearCookie,
  name: 'ClearCookie'
},
{
  path: '/newm/testWebSocket',
  component: TestWebSocket,
  name: 'TestWebSocket'
},
// 桌台普通码
{
  path: '/s',
  name: 'GeneralQRCode',
  component: GeneralQRCode
},
// 余额明细
{
  path: '/newm/moneyDetail',
  name: 'MoneyDetail',
  component: MoneyDetail
},
{
  path: '/newm',
  component: App,
  children: [
    // 彩蛋猫页面
    {
      path: '/order/newm_gamecat',
      name: 'GameCat',
      component: Gamecat
    },
    {
      path: '/newm/gamecat/payok',
      name: 'GameCatPaySuccess',
      component: GameCatPaySuccess
    },
    // 聚合二维码H5页面
    {
      path: '/newm/qrH5D',
      name: 'qrH5D',
      component: QrH5D
    },
    // 聚合二维码H5页面
    {
      path: '/newm/qrH5',
      name: 'qrH5',
      component: QrH5
    },
    // 会员卡储值, 权益购买，礼品卡充值
    {
      path: '/order/newm_vipempowerment',
      name: 'vipEmpowerment',
      component: VipEmpowerment,
    },
    {
      path: '/order/newm_vipQuotaRecharge',
      name: 'VipQuotaRecharge',
      component: VipQuotaRecharge,
    },
    // 闪付
    {
      path: '/order/newm_quickPay',
      component: QuickPay,
      name: 'QuickPay'
    },
    // 确认订单支付页
    {
      path: '/order/newm_confirmpay',
      name: 'confirmPay',
      component: ConfirmPay,
      meta: { transfer: true }
    },
    // 菜单猫储值套餐支付页
    {
      path: '/order/newm_cdmconfirmpay',
      name: 'confirmPay',
      component: Cdmconfirmpay,
      meta: { transfer: true }
    },
    // 快应用确认订单支付页
    {
      path: '/order/newm_confirmpayquick',
      name: 'confirmPayQuick',
      component: ConfirmPayQuick
    },
    // 找人代付页
    {
      path: '/order/newm_payforanother',
      name: 'payforanother',
      component: PayForAnother
    },
    // 代付款页
    {
      path: '/order/newm_requestpayment',
      name: 'requestpayment',
      component: RequestPayment
    },
    // 快速扫码点餐支付
    {
      path: '/order/newm_quickOrder',
      component: QuickOrder,
      name: 'QuickOrder'
    },
    // 支付状态页
    {
      path: '/order/newm_payStatus',
      name: 'PayStatus',
      component: PayStatus,
      meta: { transfer: true }
    },
    // 支付宝打开浏览器提示页面
    {
      path: '/newm/openBrowser',
      name: 'BrowserOpen',
      component: BrowserOpen,
    },
    // 选人数
    {
      path: '/newm/personNum',
      name: 'PersonNum',
      component: PersonNum
    },
    // 店铺列表
    {
      path: '/newm/shop',
      name: 'Shop',
      component: NearbyShop
    },
    {
      path: '/newm/shopsearch',
      name: 'ShopSearch',
      component: ShopSearch
    },
    // 菜单页
    {
      path: '/newm/menu/:shopID',
      name: 'Menu',
      component: Menu,
      meta: { transfer: true }
    },
    // 店铺详情
    {
      path: '/newm/shopdetail',
      name: 'ShopDetail',
      component: ShopDetail,
      meta: { transfer: true }
    },
    // 确认订单页
    {
      path: '/newm/menu/:shopID/confirmorder',
      name: 'confirmOrder',
      component: ConfirmOrder,
      meta: { transfer: true }
    },
    // 小饭卡支付确认页
    {
      path: '/order/newm_mealCardConfirmpay',
      name: 'MealCardConfirm',
      component: MealCardConfirm
    },
    {
      path: '/order/newm_mealCardPayStatus',
      name: 'MealCardPayStatus',
      component: MealCardPayStatus,
    },
    {
      path: '/order/newm_cardServiceFee',
      name: 'CardServiceFee',
      component: CardServiceFee
    },
    // 已下单详情页
    {
      path: '/newm/menu/:shopID/alreadyOrder',
      name: 'alreadyOrder',
      component: AlreadyOrder,
      meta: { transfer: true }
    },
    // 优惠确认页
    {
      path: '/newm/menu/:shopID/discountConfirm',
      name: 'DiscountConfirm',
      component: DiscountConfirm,
      meta: { transfer: true }
    },
    // 订单状态页
    {
      path: '/newm/order/orderStatus',
      name: 'OrderStatus',
      component: OrderStatus,
      meta: { transfer: true }
    },
    // 绑定店员
    {
      path: '/newm/boundInfo',
      component: BoundInfo,
      name: 'BoundInfo'
    },
    // 员工信息
    {
      path: '/newm/staffServe',
      component: StaffServe,
      name: 'StaffServe'
    },
    // 打赏/评价
    {
      path: '/order/newm_givereward',
      component: GiveReward,
      name: 'GiveReward'
    },
    {
      path: '/newm/staffEvaluate',
      component: StaffEvaluate,
      name: 'StaffEvaluate'
    },
    {
      path: '/newm/preSettlement',
      component: PreSettlement,
      name: 'PreSettlement'
    },
    {
      path: '/newm/PreStatement',
      component: PreStatement,
      name: 'PreStatement'
    },
    /**
       * 个人中心
       */
    // 个人中心页面
    {
      path: '/newm/membercenter',
      name: 'MemberCenter',
      component: MemberCenter
    },
    // 完善资料活动详情
    {
      path: '/newm/activedetail',
      name: 'ActiveDetail',
      component: ActiveDetail
    },
    // 完善资料个人信息
    {
      path: '/newm/userinfo',
      name: 'UserInfo',
      component: UserInfo,
      children: [
        // 完善资料常用收货地址
        {
          path: 'deliveryaddress',
          name: 'DeliveryAddress',
          component: DeliveryAddress
        },
      ]
    },
    // 完善资料绑定手机号
    {
      path: '/newm/boundphone',
      name: 'BoundPhone',
      component: BoundPhone
    },
    // 选择手机号归属地
    {
      path: '/newm/areacode',
      name: 'AreaCode',
      component: TelAreaCode
    },
    // 我的优惠券
    {
      path: '/newm/coupon',
      name: 'Coupon',
      component: Coupon
    },
    // 优惠券使用记录
    {
      path: '/newm/couponRecord',
      name: 'CouponRecord',
      component: CouponRecord
    },
    // 券包购买
    {
      path: '/newm/couponPackage',
      name: 'CouponPackage',
      component: CouponPackage
    },
    // 券包详情
    {
      path: '/order/newm_couponPackageDetail',
      name: 'CouponPackageDetail',
      component: CouponPackageDetail
    },
    // 个人中心券包
    {
      path: '/newm/userCouponPackage',
      name: 'UserCouponPackage',
      component: UserCouponPackage
    },
    // 海报
    {
      path: '/newm/poster',
      name: 'Poster',
      component: Poster
    },
    // 优惠券详情
    {
      path: '/newm/couponDetail',
      name: 'CouponDetail',
      component: CouponDetail
    },
    // 券密码
    {
      path: '/newm/couponPwd',
      name: 'CouponPwd',
      component: CouponPwd
    },
    // 优惠券二维码
    {
      path: '/newm/couponpaymentnum',
      name: 'CouponPaymentNum',
      component: CouponPaymentNum
    },
    // 优惠券分享页
    {
      path: '/newm/couponShare',
      name: 'couponShare',
      component: CouponShare
    },
    // 礼品卡退款页面
    {
      path: '/newm/refund',
      name: 'refund',
      component: Refund
    },
    // 礼品卡使用说明页面
    {
      path: '/newm/refundExplain',
      name: 'refundExplain',
      component: RefundExplain
    },
    // 礼品卡跳转功能中间页
    {
      path: '/newm/refundJump',
      name: 'refundJump',
      component: RefundJump
    },
    // 礼品卡消费记录页面
    {
      path: '/newm/consumption',
      name: 'consumption',
      component: Consumption
    },
    // 选择地址
    {
      path: '/newm/address/select',
      name: 'SelectAddress',
      component: SelectAddress
    },
    {
      path: '/newm/address/select/land',
      name: 'SelectAddressLand',
      component: SelectAddressLand
    },
    // 城市列表
    {
      path: '/newm/address/citys',
      name: 'AddressCitys',
      component: AddressCitys
    },
    // 我的地址
    {
      path: '/newm/myaddress',
      name: 'MyAddress',
      component: MyAddress
    },
    // 添加地址
    {
      path: '/newm/addaddress',
      name: 'AddAddress',
      component: AddAddress
    },
    // 编辑地址
    {
      path: '/newm/editaddress',
      name: 'EditAddress',
      component: EditAddress
    },
    // 我的订单
    {
      path: '/newm/myorder',
      name: 'MyOrder',
      component: MyOrder,
      children: [
        // 退订
        {
          path: 'unsubscribe',
          name: 'Unsubscribe',
          component: Unsubscribe
        },
        // 评价
        {
          path: 'evaluate',
          name: 'Evaluate',
          component: Evaluate
        },
        // 订单详情
        {
          path: 'orderDetail',
          name: 'OrderDetail',
          component: OrderDetail,
          meta: { transfer: true }
        }
      ]
    },
    // 评价页面
    {
      path: '/newm/evaluate',
      name: 'EvaluatePage',
      component: Evaluate
    },
    // 我的会员卡
    {
      path: '/newm/membercard',
      name: 'MemberCard',
      component: MemberCard
    },
    // 领取会员卡
    {
      path: '/newm/verifycard',
      name: 'VerifyCard',
      component: VerifyCard,
      children: [
        // 选择手机号归属地
        {
          path: 'telareacode',
          name: 'TelAreaCode',
          component: TelAreaCode
        },
      ]
    },
    // 适用店铺
    {
      path: '/newm/applyShop',
      name: 'ApplyShop',
      component: ApplyShop
    },
    // 会员卡领取成功页
    {
      path: '/newm/finished',
      name: 'Finished',
      component: Finished
    },
    // 会员卡详情
    {
      path: '/newm/vipcenter',
      name: 'VipCenter',
      component: VipCenter
    },
    // 付款码
    {
      path: '/newm/paymentnum',
      name: 'PaymentCode',
      component: PaymentNum
    },
    // 我的积分
    {
      path: '/newm/myIntegral',
      name: 'MyIntegral',
      component: MyIntegral
    },
    // 会员权益
    {
      path: '/newm/memberEquity',
      name: 'MemberEquity',
      component: MemberEquity
    },
    // 如何升级
    {
      path: '/newm/howUpgrade',
      name: 'HowUpgrade',
      component: HowUpgrade
    },
    {
      path: '/newm/vipLevelRules',
      name: 'VipLevelRules',
      component: VipLevelRules
    },
    // 交易明细
    {
      path: '/newm/transactionDetail',
      name: 'TransactionDetail',
      component: TransactionDetail
    },
    // 会员说明
    {
      path: '/newm/vipremark',
      name: 'VipRemark',
      component: VipRemark
    },
    // 修改密码
    {
      path: '/newm/setPassword',
      name: 'SetPassword',
      component: SetPassword
    },
    // 会员活动
    {
      path: '/newm/memberevent',
      name: 'MemberEvent',
      component: MemberEvent
    },
    // 会员活动详情
    {
      path: '/newm/eventCont',
      name: 'EventCont',
      component: EventCont
    },
    // 免费领取活动详情
    {
      path: '/newm/eventFree',
      name: 'EventFree',
      component: EventFree
    },
    {
      path: '/newm/signIn',
      name: 'SignIn',
      component: SignIn
    },
    // 集点卡活动详情页
    {
      path: '/newm/pointCard',
      name: 'PointCard',
      component: PointCard
    },
    // 推荐有礼邀请人页
    {
      path: '/newm/recommendInvite',
      name: 'RecommendInvite',
      component: RecommendInvite
    },
    // 推荐有礼被邀请人页面
    {
      path: '/newm/recommendByInvite',
      name: 'RecommendByInvite',
      component: RecommendByInvite
    },
    {
      path: '/newm/recommendPoster',
      name: 'RecommendPoster',
      component: RecommendPoster
    },
    // 我的奖励页面
    {
      path: '/newm/myBonus',
      name: 'MyBonus',
      component: MyBonus
    },
    // 注册手机号
    {
      path: '/newm/registerPhone',
      name: 'RegisterPhone',
      component: RegisterPhone
    },
    // 我的留言
    {
      path: '/newm/messageBoard',
      name: 'MessageBoard',
      component: MessageBoard
    },
    // 软文分享页
    {
      path: '/newm/menuShare',
      name: 'MenuShare',
      component: MenuShare
    },
    // 授权失败
    {
      path: '/newm/warrantFaild',
      name: 'WarrantFaild',
      component: WarrantFaild,
      meta: { transfer: true }
    },
    // 超出最大地理距离错误页面
    {
      path: '/newm/maxDistance',
      name: 'maxDistance',
      component: MaxDistance
    },
    {
      path: '/newm/rechargeProtocal',
      name: 'RechargeProtocal',
      component: () => import(/* webpackChunkName: "RechargeProtocal" */ '../pages/card/RechargeProtocal')
    },
    {
      path: '/newm/barginOther',
      name: 'barginOther',
      component: () => import(/* webpackChunkName: "barginForOther" */ '../pages/activity/barginForOthers')
    },
    {
      path: '/newm/barginMe',
      name: 'barginMe',
      component: () => import(/* webpackChunkName: "barginForMe" */ '../pages/activity/barginForMe')
    },
    {
      path: '/newm/barginScan',
      name: 'barginScan',
      component: () => import(/* webpackChunkName: "barginForMe" */ '../pages/activity/scanForBargin')
    },
    {
      path: '/newm/updateHint',
      name: 'updateHint',
      component: () => import(/* webpackChunkName: "RechargeProtocal" */ '../pages/user/updateHint')
    },
    {
      path: '/newm/setLang',
      name: 'setLang',
      component: () => import(/* webpackChunkName: "RechargeProtocal" */ '../pages/user/SetLang')
    },
    {
      path: '/newm/freeTable',
      name: 'FreeTable',
      component: FreeTable
    },
    {
      path: '/newm/login',
      name: 'Login',
      component: Login,
      meta: { transfer: true }
    },
    {
      path: '/newm/login_b_pic',
      name: 'Login_B_PIC',
      component: LoginBPic,
      meta: { transfer: true }
    },
    {
      path: '/newm/TelAreaCodeNew',
      name: 'TelAreaCodeNew',
      component: TelAreaCodeNew
    },
    {
      path: '/newm/shareFission',
      name: 'ShareFission',
      component: ShareFission
    }
  ],
}
];

if (process.env.VUE_APP_CURRENTMODE === 'development') {
  routes.push({
    path: '/newm/svgview',
    component: () => import('../containers/DevTools/Svgview.vue'),
    name: 'SvgView'
  });
}

routes.push({
  path: '/*',
  component: NotFound
});

export default routes;
