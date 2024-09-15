from django.db import models

# Create your models here.
class Employee(models.Model):
    Job_title = models.CharField('Должность',max_length = 50 ,default='')
    last_name = models.CharField('Фамилия',max_length = 50 ,default='')
    first_name = models.CharField('Имя', max_length=50,default='')
    patronymic = models.CharField('Отчество', max_length=50,default='')
    image = models.ImageField(blank=True, upload_to='media/', verbose_name='Ссылка картинки')
    phone = models.CharField('Контактный телефон', max_length=50, default='')
    mail = models.CharField(max_length=50, default='')

    def __str__(self):
        return self.Job_title

    class Meta():
        verbose_name = 'Сотрудник кафедры'
        verbose_name_plural = 'Сотрудники кафедры'