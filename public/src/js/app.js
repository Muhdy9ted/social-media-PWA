var defferedPrompt;

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../../serviceWorker.js').then(function(){console.log('service worker registered')});
}

window.addEventListener('beforeinstallprompt', function(event){
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    defferedPrompt = event;
    return false;
})