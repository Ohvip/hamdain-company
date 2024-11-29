        // إضافة تفاعل عند النقر على الزر
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // منع الإرسال الافتراضي للنموذج

            // إظهار رسالة تأكيد
            alert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
            contactForm.reset(); // إعادة تعيين النموذج
        });

        // تغيير لون الزر عند التمرير عليه
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = '#239673'; // لون عند التمرير
            });
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = '#27ab83'; // اللون الافتراضي
            });
        });