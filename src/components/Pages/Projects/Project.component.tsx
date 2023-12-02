import styles from './Project.module.scss';
import metro_icon from '../../../icons/Projects/metro.svg';
import zaymigo_icon from '../../../icons/Projects/zaymigo.svg';
import aliexpress_icon from '../../../icons/Projects/aliexpress.svg';
import kazakh_icon from '../../../icons/Projects/kazaxstan nalog.svg';

const Project = () => {
  return (
    <div className={styles.wrapper}>
      <div id="cases" className={styles.content}>
        <div className={styles.title}>
          <h1>проекты команды</h1>
        </div>

        <div className={styles.blocks_position}>
          <div className={styles.blocks}>
            <div className={styles.first_block}>
              <div className={styles.img_block}>
                <img src={metro_icon} alt="метро" />
              </div>
              <p>
                Для METRO CASH&CARRY разработали систему оптимального расчета медиа- микса. Заменяя
                прежний метод "на глазок", новая автоматизированная система, использующая
                статистический и корреляционный анализы, увеличила трафик в торговых точках на 10%
                против целевых 5%
              </p>
            </div>
            <div className={styles.second_block}>
              <div className={styles.img_block}>
                <img src={zaymigo_icon} alt="zaymigo" />
              </div>
              <p>
                Для МФК ЗАЙМИГО разработали систему выявления неплатежеспособных заемщиков в
                2021-2022 гг. Из-за отсутствия аналитики и программы лояльности у заказчика, создали
                решение на основе анализа данных клиента, включая кредитные истории. Увеличили
                конверсию заявок в одобрения увеличилась на 8% и снизили дефолты на 2%
              </p>
            </div>
            <div className={styles.third_block}>
              <div className={styles.img_block}>
                <img src={aliexpress_icon} alt="aliexpress" />
              </div>
              <p>
                Для AliExpress Россия в 2019 году проведен анализ электронной торговли с целью
                локализации бизнеса в РФ через организацию бондовых складов. Используя имитационное
                моделирование, выявлено: введение складов может увеличить продажи AliExpress на 25%
                и снизить продажи конкурентов на 10-12%
              </p>
            </div>
            <div className={styles.fourth_block}>
              <div className={styles.img_block}>
                <img src={kazakh_icon} alt="kazakh" />
              </div>
              <p>
                Для КГД Казахстана в 2019 году разработали систему на базе нейронных сетей, которая
                выявляет уклонение от уплаты налогов через аномальные показатели компании. Увеличили
                результативность налоговых проверок на 15%
              </p>
            </div>
          </div>

          {/* версия для планшета */}

          <div className={styles.blocks_tablet}>
            <div className={styles.first_block}>
              <img className={styles.metro} src={metro_icon} alt="метро" />
              <p>
                Для METRO CASH&CARRY разработали систему оптимального расчета медиа- микса. Заменяя
                прежний метод "на глазок", новая автоматизированная система, использующая
                статистический и корреляционный анализы, увеличила трафик в торговых точках на 10%
                против целевых 5%
              </p>
            </div>
            <div className={styles.second_block}>
              <img className={styles.zaymigo} src={zaymigo_icon} alt="zaymigo" />
              <p>
                Для МФК ЗАЙМИГО разработали систему выявления неплатежеспособных заемщиков в
                2021-2022 гг. Из-за отсутствия аналитики и программы лояльности у заказчика, создали
                решение на основе анализа данных клиента, включая кредитные истории. Увеличили
                конверсию заявок в одобрения увеличилась на 8% и снизили дефолты на 2%
              </p>
            </div>
            <div className={styles.third_block}>
              <img className={styles.aliexpress} src={aliexpress_icon} alt="aliexpress" />
              <p>
                Для AliExpress Россия в 2019 году проведен анализ электронной торговли с целью
                локализации бизнеса в РФ через организацию бондовых складов. Используя имитационное
                моделирование, выявлено: введение складов может увеличить продажи AliExpress на 25%
                и снизить продажи конкурентов на 10-12%
              </p>
            </div>
            <div className={styles.fourth_block}>
              <img src={kazakh_icon} alt="kazakh" />
              <p>
                Для КГД Казахстана в 2019 году разработали систему на базе нейронных сетей, которая
                выявляет уклонение от уплаты налогов через аномальные показатели компании. Увеличили
                результативность налоговых проверок на 15%
              </p>
            </div>
          </div>

          {/* мобильная версия */}

          <div className={styles.blocks_mobile}>
            <div className={styles.first_block}>
              <img className={styles.metro} src={metro_icon} alt="метро" />
              <p>
                Для METRO CASH&CARRY разработали систему оптимального расчета медиа- микса. Заменяя
                прежний метод "на глазок", новая автоматизированная система, использующая
                статистический и корреляционный анализы, увеличила трафик в торговых точках на 10%
                против целевых 5%
              </p>
            </div>
            <div className={styles.second_block}>
              <img className={styles.zaymigo} src={zaymigo_icon} alt="zaymigo" />
              <p>
                Для МФК ЗАЙМИГО разработали систему выявления неплатежеспособных заемщиков в
                2021-2022 гг. Из-за отсутствия аналитики и программы лояльности у заказчика, создали
                решение на основе анализа данных клиента, включая кредитные истории. Увеличили
                конверсию заявок в одобрения увеличилась на 8% и снизили дефолты на 2%
              </p>
            </div>
            <div className={styles.third_block}>
              <img className={styles.aliexpress} src={aliexpress_icon} alt="aliexpress" />
              <p>
                Для AliExpress Россия в 2019 году проведен анализ электронной торговли с целью
                локализации бизнеса в РФ через организацию бондовых складов. Используя имитационное
                моделирование, выявлено: введение складов может увеличить продажи AliExpress на 25%
                и снизить продажи конкурентов на 10-12%
              </p>
            </div>
            <div className={styles.fourth_block}>
              <img src={kazakh_icon} alt="kazakh" />
              <p>
                Для КГД Казахстана в 2019 году разработали систему на базе нейронных сетей, которая
                выявляет уклонение от уплаты налогов через аномальные показатели компании. Увеличили
                результативность налоговых проверок на 15%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
