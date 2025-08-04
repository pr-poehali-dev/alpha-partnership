import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Освойте новую профессию и зарабатывайте 
            <span className="block text-green-400 text-6xl mt-2">от 25 000 ₽</span>
            <span className="text-3xl font-normal">за 5 часов в неделю</span>
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Быстрый старт без вложений: рекомендуйте продукты и сервисы Альфа-Банка, 
            получайте стабильный доход, расширяйте свой бизнес
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
            Стать «Своим» за 5 минут
          </Button>
        </div>
        
        {/* Stats */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">20+ млн</div>
            <div className="text-lg opacity-80">клиентов доверяют Альфа-Банку</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">30 мин</div>
            <div className="text-lg opacity-80">в день достаточно для работы</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">4 года</div>
            <div className="text-lg opacity-80">пассивного дохода с команды</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Почему вам нужно к нам
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "TrendingUp", title: "Саморазвитие", desc: "Становитесь настоящим экспертом в личных финансах." },
              { icon: "DollarSign", title: "Дополнительный доход", desc: "Новую профессию легко совмещать с основной работой или бизнесом (от 30 мин в день)." },
              { icon: "Gift", title: "Бонусный кэшбэк", desc: "Вы и ваши клиенты получаете приятные бонусы за каждую операцию." },
              { icon: "Zap", title: "Старт без вложений", desc: "Обучение онлайн и бесплатно, за прохождение курса сразу начисляются баллы." },
              { icon: "Star", title: "Актуальность профессии", desc: "Финансовая грамотность всегда востребована." },
              { icon: "Heart", title: "Польза обществу", desc: "Помогаете близким и друзьям грамотно распоряжаться деньгами." },
              { icon: "Shield", title: "Надёжный партнёр", desc: "Альфа-Банку доверяют более 20 млн клиентов по всей России." }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon name={benefit.icon} className="text-blue-600" size={24} />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who is Partner Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Кто такой партнёр проекта «Свой в Альфе»
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <Icon name="Users" className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">Любой гражданин РФ 18+</h3>
                <p className="text-gray-600">
                  Студент, мама в декрете, продавец, таролог, бизнесмен или пенсионер. 
                  Не требует специального образования или лицензий — нужен только телефон и интернет.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <Icon name="Clock" className="text-green-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">30 мин–2 ч в день</h3>
                <p className="text-gray-600">
                  Настройка чат-ботов, публикации в соцсетях, групповая переписка. 
                  Клиент «привязывается» к вам на год: получайте вознаграждение 12 месяцев.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Что продаём и на чём зарабатываем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <Icon name="CreditCard" className="text-blue-600 mb-2" size={32} />
                <CardTitle className="text-blue-700">Банковские продукты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Дебетовая «Альфа-Карта для своих»</li>
                  <li>• Кредитные карты с суперкэшбэком</li>
                  <li>• Накопительный Альфа-Счёт (16% годовых)</li>
                  <li>• Кредиты наличными</li>
                  <li>• Премиальный сервис Alfa Only</li>
                  <li>• Брокерский счёт, РКО</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <Icon name="Shield" className="text-green-600 mb-2" size={32} />
                <CardTitle className="text-green-700">Страховые продукты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• КАСКО и ОСАГО</li>
                  <li>• Ипотечное страхование</li>
                  <li>• Через агрегатор</li>
                  <li className="font-semibold text-green-600">• Ещё одна линия дохода</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <Icon name="Briefcase" className="text-purple-600 mb-2" size={32} />
                <CardTitle className="text-purple-700">Вакансии</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Курьер в Альфа-Банке</li>
                  <li>• Менеджер в отделении</li>
                  <li>• Рекомендуйте трудоустройство</li>
                  <li className="font-semibold text-purple-600">• Получайте бонусы</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Income Structure */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Как формируется доход
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="text-3xl font-bold text-blue-600 mb-2">A)</div>
                <CardTitle>Баллы и рубли</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">1 балл = 100-140 ₽</div>
                <p className="text-gray-600">
                  За каждый рекомендованный продукт начисляются баллы. 
                  Конвертация в рубли в конце месяца по динамическому курсу.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="text-3xl font-bold text-blue-600 mb-2">B)</div>
                <CardTitle>3 уровня глубины</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">до 4 лет</div>
                <p className="text-gray-600">
                  Пассивный доход с 3 линий партнёров. 
                  Пример: 100 клиентов × 4 балла = до 56 000 ₽/мес.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="text-3xl font-bold text-blue-600 mb-2">C)</div>
                <CardTitle>Бонусы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">до 5 000 000 ₽</div>
                <p className="text-gray-600">
                  Глобальный бонус за 500-20 000 новых клиентов за 3 месяца. 
                  Экстра-бонус по 30 000 ₽ за каждого успешного партнёра.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Income Example */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Пример дохода</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className="text-sm opacity-80">клиентов в 1-й линии</div>
                </div>
                <div className="text-2xl">×</div>
                <div>
                  <div className="text-3xl font-bold">4</div>
                  <div className="text-sm opacity-80">балла каждый</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">56 000 ₽</div>
                  <div className="text-sm opacity-80">в месяц</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Истории успеха
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Марина", city: "Казань", income: "30 000 ₽", time: "5 ч/нед", result: "купила квартиру без ипотеки" },
              { name: "Алексей", city: "Новосибирск", income: "120 000 ₽", time: "удалённо", result: "совмещая с основной работой" },
              { name: "Анна", city: "СПб", income: "5 000 000 ₽", time: "за полгода", result: "глобального бонуса в проекте" }
            ].map((story, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">{story.income}</div>
                  <div className="text-lg font-semibold mb-2">{story.name} ({story.city})</div>
                  <div className="text-sm text-gray-600 mb-2">{story.time}</div>
                  <div className="text-sm text-gray-700">{story.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Пошаговый план старта
          </h2>
          <div className="space-y-6">
            {[
              "Оставьте заявку и получите доступ в личный кабинет → знакомство с куратором",
              "Пройдите бесплатное онлайн-обучение (3 ступени: личные финансы, банковские продукты, продажи)",
              "Начните консультации: дайте ссылку, клиент сам заполняет заявку, менеджер банка завершает оформление",
              "Рекомендуйте страховые сервисы и вакансии → дополнительные баллы",
              "Привлекайте партнёров в 3 глубины, масштабируйте доход до десятков тысяч рублей в неделю"
            ].map((step, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold">
              Начать зарабатывать
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-lg border-0 px-6">
              <AccordionTrigger className="text-left font-semibold">
                Сколько занимает обучение?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                2–3 часа онлайн, сразу начисляются баллы за прохождение курса.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-lg border-0 px-6">
              <AccordionTrigger className="text-left font-semibold">
                Какие гарантии выплат?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                При 40 личных баллах — от 4 000 до 5 000 ₽; при активных рекомендациях — от 25 000 ₽ за неделю.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-lg border-0 px-6">
              <AccordionTrigger className="text-left font-semibold">
                Нужны ли вложения и опыт?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Нет и нет — всё бесплатно, без предварительных взносов и специальных знаний.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Оставить заявку
            </h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">ФИО</Label>
                <Input id="name" placeholder="Иванов Иван Иванович" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (999) 123-45-67" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="ivan@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="city">Город</Label>
                <Input id="city" placeholder="Москва" className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold">
                Стать партнёром
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold mb-2">АО «Альфа-Банк»</div>
            <div className="text-gray-400">© 2025 • Лицензия ЦБ РФ № 1326</div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Политика обработки персональных данных</a>
            <span className="hidden md:inline">•</span>
            <a href="tel:+74957888878" className="hover:text-white">Поддержка: +7 495 788 88 78</a>
          </div>
        </div>
      </footer>
    </div>
  )
}