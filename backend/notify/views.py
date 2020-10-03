from django.http import HttpResponse
from django.views import View
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync


class Notification(View):
    def get(self, request):
        layer = get_channel_layer()
        async_to_sync(layer.group_send)('events', {
            'type': 'events.todonotify',
            'content': {
                'id': 999,
                'title': "ToDo Reminder",
                'description': "wake up early in the morning",
                'completed': True
            }
        })
        return HttpResponse('result')
