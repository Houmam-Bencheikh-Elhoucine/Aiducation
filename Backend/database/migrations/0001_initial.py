# Generated by Django 4.1.5 on 2023-01-28 23:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Announcements',
            fields=[
                ('idAnnouncement', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default='', max_length=255)),
                ('description', models.CharField(default='', max_length=700)),
                ('price', models.IntegerField(default=0)),
                ('location', models.CharField(default='', max_length=125)),
                ('module', models.CharField(default='', max_length=125)),
                ('category', models.CharField(default='', max_length=125)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('idUser', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(default='', max_length=255)),
                ('lastName', models.CharField(default='', max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('phoneNumber', models.CharField(default='', max_length=20)),
                ('landLineNumber', models.CharField(default='', max_length=20, null=True)),
                ('password', models.CharField(default='', max_length=255)),
                ('address', models.CharField(default='', max_length=125)),
                ('profilePicture', models.ImageField(default='database/images/default.png', upload_to='database/images')),
            ],
        ),
        migrations.CreateModel(
            name='Photos',
            fields=[
                ('idPhoto', models.AutoField(primary_key=True, serialize=False)),
                ('photo', models.ImageField(default='database/images/default.png', upload_to='database/images')),
                ('priority', models.IntegerField(default='')),
                ('announcement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.announcements')),
            ],
        ),
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('idMessage', models.AutoField(primary_key=True, serialize=False)),
                ('state', models.IntegerField(choices=[(-1, 'Refusé(e)'), (0, 'En attente'), (1, 'Accepté(e)')], default=0)),
                ('reason', models.CharField(default='', max_length=255)),
                ('dateSent', models.DateTimeField(auto_now_add=True)),
                ('dateResponse', models.DateTimeField(null=True)),
                ('announcement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.announcements')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.users')),
            ],
        ),
        migrations.CreateModel(
            name='Favoriser',
            fields=[
                ('idFavoriser', models.AutoField(primary_key=True, serialize=False)),
                ('idAnnouncement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.announcements')),
                ('idUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.users')),
            ],
        ),
        migrations.AddField(
            model_name='announcements',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.users'),
        ),
    ]