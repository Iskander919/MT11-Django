from django.shortcuts import render
from django.http import HttpResponse
from .models import Employee
import gspread
from django.contrib.auth import logout

def index(request):
    return render(request, 'main/index.html', {'title' : 'Главная страница' })


def syllabus(request):
    return render(request, 'main/index2.html', {'title2' : 'Учебный план' })

def schedule(request):
    gc = gspread.service_account(filename='my-test-project-393514-a124afd2fae3.json')
    sh = gc.open("Расписание")
    worksheetB = sh.get_worksheet(0)
    worksheetM = sh.get_worksheet(1)
    worksheetA = sh.get_worksheet(2)
    list_of_listsB = worksheetB.get_all_values()
    list_of_listsM = worksheetM.get_all_values()
    list_of_listsA = worksheetA.get_all_values()
    return render(request, 'main/index3.html', {'title3': 'Расписание', "testtable": list_of_listsB, "testtableM": list_of_listsM, "testtableA": list_of_listsA} )


def personalities(request):
    person = Employee.objects.all()
    gc = gspread.service_account(filename='my-test-project-393514-a124afd2fae3.json')
    sh = gc.open("Расписание")
    worksheetPa = sh.get_worksheet(3)
    worksheetMi = sh.get_worksheet(4)
    worksheetBe = sh.get_worksheet(5)
    worksheetDe = sh.get_worksheet(6)
    list_of_listsPa = worksheetPa.get_all_values()
    list_of_listsMi = worksheetMi.get_all_values()
    list_of_listsBe = worksheetBe.get_all_values()
    list_of_listsDe = worksheetDe.get_all_values()
    return render(request, 'main/personalities.html', {'person': person, "Pa": list_of_listsPa, "Mi": list_of_listsMi, "Be": list_of_listsBe, 'De': list_of_listsDe})

