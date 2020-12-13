from django.core.management.base import BaseCommand

from scheduler.analyse_lego_ideas import run_lego_metrics


class Command(BaseCommand):
    help = 'Run Analytics'

    def handle(self, *args, **options):
        run_lego_metrics()

