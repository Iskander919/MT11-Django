from django.db import models

class Artic(models.Model):
    title = models.CharField('Название', max_length=50, default='')
    image1 = models.ImageField(blank=True, upload_to='media/', help_text='150x150px', verbose_name='Ссылка картинки')
    anons = models.CharField('Анонс', max_length=250, default='')
    full_text = models.TextField('Статья', max_length=25000, default='')
    image2 = models.ImageField(blank=True, upload_to='media/', help_text='150x150px', verbose_name='Ссылка картинки')
    date = models.DateTimeField('Дата публикации', default='')
    image3 = models.ImageField(blank=True, upload_to='media/', help_text='150x150px', verbose_name='Ссылка картинки')


    def __str__(self):
        return self.title

    class Meta():
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


