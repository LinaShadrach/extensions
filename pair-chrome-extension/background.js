var switchInterval = 21000;

var startNotifications = function() {
  var now = new Date();
  var notificationInterval = setInterval(createNotification, switchInterval);
  var classTime = (now.getHours() >= 8 && now.getHours() <= 16 && now.getDay() !== 0 && now.getDay() !== 5 && now.getDay() !== 6);
  if(!classTime) { clearInterval(notificationInterval) }
}
var opt = {
    type: 'basic',
    title: 'Switch Pairs!',
    message: 'time\'s up',
    priority: 1,
    expandedMessage: `It's been ${switchInterval/100} minutes since the last switch. if you haven't switched already, please switch driver/navigator roles.`,
    requireInteraction: true,
    iconUrl:'epicodus-icon.png'
}
var createNotification = function() {
  chrome.notifications.create('pair-notification', opt, null)
}
chrome.runtime.onInstalled.addListener(startNotifications);
