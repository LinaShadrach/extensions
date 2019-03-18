var startNotifications = function() {
  var now = new Date();
  var notificationInterval = setInterval(createNotification, 1000);
  var classTime = (now.getHours() >= 8 && now.getHours() <= 16 && now.getDay() !== 0 && now.getDay() !== 5 && now.getDay() !== 6);
  if(!classTime) { clearInterval(notificationInterval) }
}
var opt = {
    type: 'basic',
    title: 'Switch Pairs!',
    message: 'time\'s up',
    priority: 1,
    expandedMessage: 'hi',
    requireInteraction: true,
    iconUrl:'epicodus-icon.png'
};
var createNotification = function() {
  chrome.notifications.create('pair-notification', opt, function(){console.log("print")})
}
chrome.runtime.onInstalled.addListener(startNotifications);
