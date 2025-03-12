// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Replace with your Google Analytics ID
gtag('config', 'G-3L4FRT1ZWC', { 
    'send_page_view': true,
    'anonymize_ip': true, 
    'allow_google_signals': true, 
    'link_attribution': true, 
    'debug_mode': false
});

// Scroll Depth Tracking
window.addEventListener("scroll", function() {
    let scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (scrollPercentage > 0.25) {
        gtag('event', 'scroll', { 'event_category': 'User Engagement', 'event_label': '25% Scroll' });
    }
    if (scrollPercentage > 0.50) {
        gtag('event', 'scroll', { 'event_category': 'User Engagement', 'event_label': '50% Scroll' });
    }
    if (scrollPercentage > 0.75) {
        gtag('event', 'scroll', { 'event_category': 'User Engagement', 'event_label': '75% Scroll' });
    }
    if (scrollPercentage > 0.90) {
        gtag('event', 'scroll', { 'event_category': 'User Engagement', 'event_label': '90% Scroll' });
    }
});

// Outbound Link Tracking
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            let url = new URL(link.href);
            let isExternal = url.hostname !== window.location.hostname;
            if (isExternal) {
                gtag('event', 'outbound_click', {
                    'event_category': 'Navigation',
                    'event_label': url.href,
                    'event_action': 'click',
                    'utm_source': url.searchParams.get("utm_source") || "unknown",
                    'utm_medium': url.searchParams.get("utm_medium") || "unknown"
                });
            }
        });
    });
});

// File Download Tracking
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll("a[href$='.pdf'], a[href$='.docx'], a[href$='.zip']").forEach(link => {
        link.addEventListener("click", function() {
            gtag('event', 'file_download', {
                'event_category': 'Downloads',
                'event_label': link.href
            });
        });
    });
});

// Button Click Tracking
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            gtag('event', 'button_click', {
                'event_category': 'User Interaction',
                'event_label': button.innerText.trim()
            });
        });
    });
});

// Time Spent on Page Tracking (fires after 30 seconds)
setTimeout(function() {
    gtag('event', 'time_on_page', {
        'event_category': 'User Engagement',
        'event_label': 'Stayed for 30 seconds'
    });
}, 30000);
