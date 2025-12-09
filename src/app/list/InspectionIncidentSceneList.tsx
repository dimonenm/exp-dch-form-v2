"use client"

import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@heroui/react"
import {Image} from "@heroui/image";
import { getInspectionIncidentSceneIncludedOrNotIncludedInSummary } from '../auth/db/getData'

export function InspectionIncidentSceneList() {
	const items = getInspectionIncidentSceneIncludedOrNotIncludedInSummary()

	if (!items.length) {
		return <div className="text-center text-sm text-gray-500">Данных по осмотрам мест происшествий нет</div>
	}

	return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Card radius="lg" shadow="sm" className="p-4 bg-white">
        <CardBody>
          {/* GRID TOP */}
          <div className="grid grid-cols-12 gap-3 text-sm font-medium">
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">№ по сводке</div>
              <div className="p-1 font-normal">2</div>
            </div>
            <div className="col-span-3">
              <div className="bg-default-100 p-1 rounded">Вид преступления</div>
              <div className="p-1 font-normal">Покушение</div>
            </div>
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">КУСП</div>
              <div className="p-1 font-normal">1234<br/>от 11.09.2025</div>
            </div>
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">Эксперт</div>
              <div className="p-1 font-normal">Иванов</div>
            </div>
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">Способ совершения</div>
              <div className="p-1 font-normal">Свободный доступ</div>
            </div>
            <div className="col-span-1">
              <div className="bg-default-100 p-1 rounded">Статья</div>
              <div className="p-1 font-normal">158/2/в</div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="grid grid-cols-12 gap-3 mt-4 text-sm font-medium">
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">ОВД</div>
              <div className="p-1 font-normal">Евпатория</div>
            </div>
            <div className="col-span-3">
              <div className="bg-default-100 p-1 rounded">Адрес</div>
              <div className="p-1 font-normal">ул. Ленина</div>
            </div>
            <div className="col-span-1">
              <div className="bg-default-100 p-1 rounded">УД</div>
              <div className="p-1 font-normal">-</div>
            </div>
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">Время ОМП</div>
              <div className="p-1 font-normal">12,00–14,00</div>
            </div>
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">ФИО потерпевшего</div>
              <div className="p-1 font-normal">Петров</div>
            </div>
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">Сумма ущерба</div>
              <div className="p-1 font-normal">45000 руб</div>
            </div>
          </div>

          {/* SUSPECT */}
          <div className="mt-4 bg-default-100 p-2 rounded text-sm">
            <div className="font-medium">
              ФИО подозреваемого по сводке, предоставление д/к, б/к, замечания по ФТ
            </div>
            <div className="mt-1 font-normal">Сидоров, 00.00.1968</div>
          </div>

          {/* SEIZURES */}
          <div className="grid grid-cols-12 gap-3 mt-4 text-sm font-medium">
            <div className="col-span-2">
              <div className="bg-default-100 p-1 rounded">Изъятия</div>
            </div>
            <div className="col-span-10 bg-default-50 p-3 rounded">
              <div className="flex gap-4">
                <div className="font-semibold w-20">Биология</div>
                <div className="font-normal">Фрагмент ковра с ВБЦ</div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="font-semibold w-20">Иное</div>
                <div className="font-normal">Обрез ружья, 6 патронов и 3 гильзы 12 калибра</div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-4 bg-default-100 p-2 rounded text-sm font-medium">
            Предполагаемый вывод, Результаты проверки
          </div>
        </CardBody>
      </Card>
    </div>
  )
}



