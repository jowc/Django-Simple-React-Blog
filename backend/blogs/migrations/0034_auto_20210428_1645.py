# Generated by Django 3.1 on 2021-04-28 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0033_auto_20210428_1604'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='publish_date',
            field=models.DateTimeField(null=True),
        ),
    ]
