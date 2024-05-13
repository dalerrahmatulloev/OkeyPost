import React from "react";
import Иллюстрация from "../../assets/Иллюстрация.png";
import Иконка from "../../assets/Иконка.svg";
import Иконка1 from "../../assets/Иконка (1).svg";
import Иконка2 from "../../assets/Иконка (2).svg";
import Иконка3 from "../../assets/Иконка (3).svg";
import Иконка4 from "../../assets/Иконка (4).svg";
import Иконка5 from "../../assets/Иконка (5).svg";
import фон from "../../assets/фон.svg";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";
import { Grid, Pagination } from "swiper/modules";
const Home = () => {
  return (
    <>
      <header>
        <div className="w-[1500px] rounded-[36px] m-auto sm:w-[350px] md:w-[680px] bg-[#5B52A3] py-[100px] sm:py-[50px] md:py-[60px]">
          <div className="flex flex-wrap sm:w-[90%] md:w-[90%] m-auto justify-between sm:justify-center w-[1400px]">
            <div className="w-[696px] sm:w-auto md:w-auto">
              <h1 className="text-[72px] sm:text-[28px] md:text-[40px] text-white font-[700]">
                Доставка товаров из Великобритании в Россию
              </h1>
              <p className="text-[#ffffff89] sm:text-[17px] md:text-[18px] text-[20px]">
                Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost,
                чтобы покупать со скидками в UK одежду, обувь, гаджеты известных
                брендов и безопасно отправлять вещи в Россию.
              </p>
              <button className="bg-[#01CB7C] md:text-[16px] md:h-auto md:w-auto md:p-[15px_30px] h-[66px] w-[260px] rounded-full mt-[30px] text-[white] text-[17px]">
                Получить адрес в UK
              </button>
            </div>
            <div className="md:flex md:justify-center">
              <img
                className="md:mt-[30px] md:w-[90%]"
                src={Иллюстрация}
                alt={фон}
              />
              <div className="">
                <p>Цена в России</p>
                <h3>7891,46₽</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="w-[1400px] m-auto sm:w-[340px] mt-[160px] md:w-[670px]">
            <h1 className="text-[44px] md:text-[22px] sm:text-[18px] dark:text-white">
              Насколько выгодно покупать?
            </h1>
            <div className="">
              <Swiper
                slidesPerView={6}
                grid={{
                  rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Одежда
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка1} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Электроника
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка2} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Аксессуары
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка3} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Для детей
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка4} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Для спорта
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка5} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Косметика
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Одежда
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка1} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Электроника
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка2} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Аксессуары
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка3} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Для детей
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка4} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Для спорта
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center py-[24px] items-center">
                    <img src={Иконка5} alt="" />
                    <p className="ml-[11px] font-[700] dark:text-[black] md:text-[13px]">
                    Косметика
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex justify-between items-center">
              <div className="w-[400px]">
                <h1>Columbia Barlow Pass 550 Turbodown Jacket</h1>
                <div className="bg-[#F2F6FC] flex items-center justify-center">

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
