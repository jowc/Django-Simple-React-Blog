# Generated by Django 3.1 on 2021-04-28 15:04

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0032_auto_20210423_1853'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='publish_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
