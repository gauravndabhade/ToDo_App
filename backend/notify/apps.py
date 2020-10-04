from django.apps import AppConfig
# from datetime import datetime
# from apscheduler.schedulers.background import BackgroundScheduler
# from notify.utils import send_notification


class NotifyConfig(AppConfig):
    name = 'notify'
    # scheduler = BackgroundScheduler()
    # scheduler.add_job(send_notification, 'interval', minutes=1)
    # scheduler.start()
    # print('scheduler started')
