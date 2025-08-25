import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-primary/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Icon name="Car" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">PREMIUM AUTO TRAVEL</h1>
                <p className="text-xs text-muted-foreground">Элитные автопутешествия</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="text-foreground hover:text-primary transition-colors">Выбрать тур</a>
              <a href="#offers" className="text-foreground hover:text-primary transition-colors">Акции</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">Вопросы</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Наша команда</a>
            </nav>
            
            {/* Contact & Social */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <Icon name="MessageCircle" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
              <a href="tel:+7-999-123-4567" className="flex items-center space-x-2 text-primary font-semibold hover:bg-primary/5 px-3 py-2 rounded-lg transition-colors">
                <Icon name="Phone" size={16} />
                <span className="hidden sm:inline">+7 (999) 123-45-67</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Элитные 
              <span className="text-primary"> автопутешествия</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Откройте мир премиальных автотуров с полным сервисом. Уникальные маршруты, 
              роскошные автомобили и незабываемые впечатления для самых взыскательных путешественников.
            </p>
            
            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-4">
                <Icon name="Shield" size={24} className="text-primary" />
                <span className="font-medium">Полная организация</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-4">
                <Icon name="Crown" size={24} className="text-primary" />
                <span className="font-medium">VIP сервис</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="font-medium">Уникальные маршруты</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                Выбрать тур
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg">
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Cards */}
      <section id="tours" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Наши предложения</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium Tours */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/91842252-a0a8-495c-a035-c86d91cbd144.jpg" 
                  alt="Премиальные туры"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  PREMIUM
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-4">Выбрать тур</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Индивидуальные маршруты по самым живописным местам. 
                  Роскошные автомобили, эксклюзивные отели, персональный сервис.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Подробнее
                </Button>
              </div>
            </Card>

            {/* Weekend Tours */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/472301ab-2bff-4b1e-8a0d-82ab96b7e606.jpg" 
                  alt="Рейды выходного дня"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-foreground text-white px-3 py-1 rounded-full text-sm font-medium">
                  WEEKEND
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-4">Рейд выходного дня</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Короткие, но насыщенные автопутешествия на выходных. 
                  Идеальный баланс между адреналином и комфортом.
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  Узнать больше
                </Button>
              </div>
            </Card>

            {/* Corporate Tours */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-secondary/50 to-secondary/20">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Icon name="Users" size={80} className="text-primary/60" />
                <div className="absolute top-4 left-4 bg-secondary text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  CORPORATE
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-4">Корпоративные туры</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Командообразующие автопутешествия для бизнеса. 
                  Сплочение коллектива в формате премиального отдыха.
                </p>
                <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground/5">
                  Заказать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">На чем едем</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-3xl font-bold text-foreground mb-6">Премиальный автопарк</h4>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наш флот состоит исключительно из автомобилей премиум-класса. 
                Mercedes G-Class, BMW X7, Range Rover Sport — каждая машина 
                проходит тщательную подготовку и техническое обслуживание перед поездкой.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-foreground">Полная страховка и техподдержка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-foreground">Максимальный комфорт и безопасность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-foreground">Профессиональная подготовка к маршруту</span>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Подробнее о "Танке"
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <img 
                  src="/img/4f655e3a-0f0c-454f-a653-222aeb9f838e.jpg" 
                  alt="Премиальные автомобили"
                  className="w-full h-80 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Inclusive */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-6">Все включено</h3>
            <p className="text-lg text-muted-foreground">
              VIP-сервис полного цикла — от планирования до возвращения домой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Hotel" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Размещение</h4>
              <p className="text-muted-foreground text-sm">
                Бронирование отелей класса люкс, эксклюзивные номера с лучшими видами
              </p>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Utensils" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Питание</h4>
              <p className="text-muted-foreground text-sm">
                Индивидуальное меню, закупка эксклюзивных продуктов и напитков по запросу
              </p>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Wifi" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Связь</h4>
              <p className="text-muted-foreground text-sm">
                Безлимитный интернет, спутниковая связь в удаленных районах
              </p>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Мерч</h4>
              <p className="text-muted-foreground text-sm">
                Эксклюзивные сувениры, брендированная экипировка, памятные подарки
              </p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <Icon name="MessageSquare" size={32} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">Индивидуальные пожелания</h4>
              <p className="text-muted-foreground">
                При отправке заявки вы можете указать любые индивидуальные пожелания 
                в поле "Дополнительно". Мы учтем каждую деталь для вашего комфорта.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <img 
                  src="/img/b433a7d4-6bd3-4987-a4ea-b1908b80fe2e.jpg" 
                  alt="Безопасность в путешествиях"
                  className="w-full h-80 object-cover"
                />
              </Card>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-6">Безопасность</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Безопасность наших клиентов — наш абсолютный приоритет. 
                Каждое путешествие планируется с учетом всех возможных рисков 
                и обеспечивается профессиональной поддержкой.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Круглосуточная поддержка</h4>
                    <p className="text-muted-foreground">Оперативный центр контроля маршрута и экстренного реагирования</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Satellite" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">GPS-мониторинг</h4>
                    <p className="text-muted-foreground">Постоянное отслеживание местоположения и состояния группы</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Heart" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Медицинское сопровождение</h4>
                    <p className="text-muted-foreground">Аптечка экстренной помощи и связь с медицинскими службами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Отзывы участников</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">Алексей М.</h5>
                    <p className="text-sm text-muted-foreground">Кавказский тур</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Невероятные впечатления! Организация на высшем уровне, 
                  каждая деталь продумана. Обязательно поедем еще!"
                </p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-primary fill-primary" />
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">Елена К.</h5>
                    <p className="text-sm text-muted-foreground">Алтайская экспедиция</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Профессиональная команда, комфортные автомобили, 
                  потрясающие маршруты. Рекомендую всем!"
                </p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-primary fill-primary" />
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">Дмитрий Р.</h5>
                    <p className="text-sm text-muted-foreground">Корпоративный тур</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Отличное решение для team-building. Коллектив сплотился, 
                  все остались в восторге от поездки!"
                </p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-primary fill-primary" />
                  ))}
                </div>
              </Card>
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 px-8 py-3"
                onClick={() => {
                  const modal = document.getElementById('review-modal');
                  if (modal) modal.classList.remove('hidden');
                }}
              >
                Написать отзыв
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <div id="review-modal" className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-foreground">Написать отзыв</h4>
              <button 
                onClick={() => {
                  const modal = document.getElementById('review-modal');
                  if (modal) modal.classList.add('hidden');
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Имя (ник)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Название тура</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="В каком туре участвовали?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Отзыв</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  placeholder="Поделитесь впечатлениями о поездке..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Отправить отзыв
              </Button>
            </form>
          </div>
        </Card>
      </div>

      {/* Special Offers */}
      <section id="offers" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Специальные предложения</h3>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 p-8 text-center">
              <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-4">Раннее бронирование</h4>
              <p className="text-muted-foreground mb-6">
                Скидка до 20% при бронировании тура за 2 месяца. 
                Дополнительные бонусы для постоянных клиентов.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Воспользоваться
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Часто задаваемые вопросы</h3>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  Что входит в стоимость тура?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  В стоимость включены: аренда премиального автомобиля, проживание в отелях класса люкс, 
                  трансферы, питание по программе, услуги гида-сопровождающего, страховка.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  Можно ли изменить маршрут?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Да, мы создаем индивидуальные маршруты под ваши предпочтения. 
                  Возможны изменения даже во время путешествия с учетом ваших пожеланий.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  Какие автомобили предоставляются?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Наш автопарк включает премиальные внедорожники и спорткары: 
                  Mercedes G-Class, BMW X7, Porsche Cayenne, Range Rover и другие модели класса люкс.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Наша команда</h3>
          
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/10 border-0 shadow-lg p-8">
              <Icon name="Award" size={48} className="text-primary mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-foreground mb-4">15+ лет опыта</h4>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Наша команда профессионалов создает незабываемые автопутешествия уже более 15 лет. 
                Мы знаем каждый маршрут как свои пять пальцев и гарантируем безупречный сервис 
                на каждом этапе вашего путешествия.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Уникальных маршрутов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Безопасность</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <span className="text-lg font-bold">PREMIUM AUTO TRAVEL</span>
              </div>
              <p className="text-gray-300">
                Элитные автопутешествия с безупречным сервисом
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@premiumautotravel.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Красная площадь, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={24} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 Premium Auto Travel. Все права защищены.
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;