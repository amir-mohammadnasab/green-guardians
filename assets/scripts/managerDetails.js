// Manager details data
const managersData = {
    1: {
        name: 'دکتر احمد محمدی',
        position: 'مدیرعامل سازمان',
        image: './assets/images/managers/1.png',
        education: 'دکترای محیط زیست از دانشگاه تهران (1385)',
        experience: `
            <ul>
                <li>15 سال سابقه مدیریت در سازمان‌های زیست محیطی</li>
                <li>مشاور ارشد سازمان حفاظت محیط زیست (1390-1395)</li>
                <li>مدیر پروژه‌های بین‌المللی UNDP در ایران</li>
                <li>عضو هیئت علمی دانشگاه تهران</li>
            </ul>
        `,
        contact: {
            email: 'a.mohammadi@yahoo.com',
            phone: '0912-0000000',
            linkedin: 'linkedin.com/in/sample'
        },
        articles: [
            'راهکارهای نوین حفاظت از محیط زیست در ایران (1402)',
            'نقش سازمان‌های مردم نهاد در توسعه پایدار (1401)',
            'چالش‌های زیست محیطی قرن 21 و راه‌حل‌های پیشنهادی (1400)',
            'مدیریت بحران‌های زیست محیطی در کشورهای در حال توسعه (1399)'
        ]
    },
    2: {
        name: 'مهندس زهرا کریمی',
        position: 'معاون فنی',
        image: './assets/images/managers/2.png',
        education: 'کارشناسی ارشد مهندسی محیط زیست از دانشگاه شیراز (1392)',
        experience: `
            <ul>
                <li>10 سال تجربه در طراحی و اجرای پروژه‌های سبز</li>
                <li>مدیر فنی پروژه احیای دریاچه پریشان</li>
                <li>طراح سیستم‌های تصفیه آب صنعتی</li>
                <li>مشاور فنی شهرداری شیراز در پروژه‌های محیط زیست</li>
            </ul>
        `,
        contact: {
            email: 'z.karimi@yahoo.com',
            phone: '0913-0000000',
            linkedin: 'linkedin.com/in/sample'
        },
        articles: [
            'فناوری‌های نوین در بازیافت پسماند شهری (1403)',
            'مدیریت پایدار منابع آب در مناطق خشک (1402)',
            'انرژی‌های تجدیدپذیر و آینده ایران (1401)',
            'طراحی شهرهای سبز: چالش‌ها و فرصت‌ها (1400)'
        ]
    },
    3: {
        name: 'دکتر رضا عباسی',
        position: 'مدیر پروژه‌ها',
        image: './assets/images/managers/3.png',
        education: 'دکترای مدیریت منابع طبیعی از دانشگاه علوم کشاورزی (1388)',
        experience: `
            <ul>
                <li>12 سال مدیریت پروژه‌های ملی و بین‌المللی</li>
                <li>مدیر پروژه احیای جنگل‌های زاگرس</li>
                <li>همکاری با FAO در پروژه‌های کشاورزی پایدار</li>
                <li>مشاور برنامه‌ریزی استراتژیک سازمان‌های بین‌المللی</li>
            </ul>
        `,
        contact: {
            email: 'r.abbasi@yahoo.com',
            phone: '0914-0000000',
            linkedin: 'linkedin.com/in/sample'
        },
        articles: [
            'برنامه‌ریزی استراتژیک در حفاظت از جنگل‌ها (1403)',
            'مشارکت جوامع محلی در حفظ محیط زیست (1402)',
            'ارزیابی اثرات زیست محیطی پروژه‌های توسعه (1401)',
            'مدیریت یکپارچه منابع طبیعی در ایران (1400)'
        ]
    },
    4: {
        name: 'دکتر سارا رحیمی',
        position: 'مدیر آموزش',
        image: './assets/images/managers/4.png',
        education: 'دکترای آموزش محیط زیست از دانشگاه شهید بهشتی (1390)',
        experience: `
            <ul>
                <li>طراح برنامه‌های آموزشی ملی محیط زیست</li>
                <li>مؤلف 5 کتاب آموزشی در حوزه محیط زیست</li>
                <li>مدرس دوره‌های تخصصی برای مربیان محیط زیست</li>
                <li>برنده جایزه بهترین برنامه آموزشی UNESCO</li>
            </ul>
        `,
        contact: {
            email: 's.rahimi@yahoo.com',
            phone: '0915-0000000',
            linkedin: 'linkedin.com/in/sample'
        },
        articles: [
            'روش‌های نوین آموزش محیط زیست به کودکان (1403)',
            'نقش آموزش در تغییر رفتار زیست محیطی (1402)',
            'طراحی برنامه‌های آموزشی مشارکتی (1401)',
            'ارزیابی اثربخشی آموزش‌های محیط زیست (1400)'
        ]
    },
    5: {
        name: 'مهندس علی احمدی',
        position: 'مدیر روابط عمومی',
        image: './assets/images/managers/5.png',
        education: 'کارشناسی ارشد روابط عمومی از دانشگاه علامه طباطبایی (1395)',
        experience: `
            <ul>
                <li>8 سال تجربه در ارتباطات سازمانی و رسانه</li>
                <li>مدیر کمپین‌های موفق زیست محیطی</li>
                <li>همکاری با رسانه‌های ملی در تولید محتوای آموزشی</li>
                <li>طراح استراتژی ارتباطی سازمان</li>
            </ul>
        `,
        contact: {
            email: 'a.ahmadi@yahoo.com',
            phone: '0916-0000000',
            linkedin: 'linkedin.com/in/sample'
        },
        articles: [
            'نقش رسانه در ترویج فرهنگ محیط زیست (1403)',
            'استراتژی‌های ارتباطی در سازمان‌های NGO (1402)',
            'شبکه‌های اجتماعی و فعالیت‌های زیست محیطی (1401)'
        ]
    },
    6: {
        name: 'دکتر فاطمه نوری',
        position: 'مدیر پژوهش',
        image: './assets/images/managers/6.png',
        education: 'دکترای بوم‌شناسی از دانشگاه فردوسی مشهد (1387)',
        experience: `
            <ul>
                <li>نویسنده بیش از 50 مقاله علمی ISI</li>
                <li>سرپرست آزمایشگاه تحقیقات محیط زیست</li>
                <li>عضو هیئت تحریریه 3 مجله علمی بین‌المللی</li>
                <li>مشاور علمی پروژه‌های ملی حفاظت از تنوع زیستی</li>
            </ul>
        `,
        contact: {
            email: 'f.nouri@yahoo.com',
            phone: '0917-0000000',
            linkedin: 'linkedin.com/in/sample'
        },
        articles: [
            'تنوع زیستی در اکوسیستم‌های ایران (1403)',
            'اثرات تغییر اقلیم بر گونه‌های بومی (1402)',
            'روش‌های نوین پایش محیط زیست (1401)',
            'حفاظت از گونه‌های در معرض انقراض ایران (1400)'
        ]
    }
};

// Function to show manager details
function showManagerDetails(managerId) {
    const manager = managersData[managerId];
    const modalTitle = document.getElementById('managerModalLabel');
    const modalContent = document.getElementById('managerDetailsContent');
    
    modalTitle.textContent = `${manager.name} - ${manager.position}`;
    
    let articlesHtml = '';
    manager.articles.forEach(article => {
        articlesHtml += `
            <li>
                <a href="#">
                    <span>${article}</span>
                    <i class="fas fa-arrow-left"></i>
                </a>
            </li>
        `;
    });
    
    modalContent.innerHTML = `
        <div class="text-center">
            <div class="manager-detail-image">
                <img src="${manager.image}" alt="${manager.name}">
            </div>
        </div>
        
        <div class="detail-section">
            <h5><i class="fas fa-graduation-cap"></i> تحصیلات</h5>
            <p>${manager.education}</p>
        </div>
        
        <div class="detail-section">
            <h5><i class="fas fa-briefcase"></i> سوابق کاری</h5>
            ${manager.experience}
        </div>
        
        <div class="detail-section">
            <h5><i class="fas fa-address-card"></i> اطلاعات تماس</h5>
            <p>
                <strong>ایمیل:</strong> ${manager.contact.email}<br>
                <strong>تلفن:</strong> ${manager.contact.phone}<br>
                <strong>لینکدین:</strong> <a href="https://${manager.contact.linkedin}" target="_blank">${manager.contact.linkedin}</a>
            </p>
        </div>
        
        <div class="detail-section">
            <h5><i class="fas fa-newspaper"></i> مقالات منتشر شده</h5>
            <ul class="articles-list">
                ${articlesHtml}
            </ul>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('managerModal'));
    modal.show();
}

// Scroll animations
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});