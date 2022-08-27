<template>
  <div class="bg-[#181818] rounded-xl">
    <div class="overflow-x-auto !rounded-t-md mt-[3%]" v-if="$store.state.calendar.calendarData">
      <table class="table-auto w-full !rounded-t-xl text-white">
        <thead class="border-b">
          <tr class="bg-[#000000]">
            <th class="text-center p-4 font-medium">
             {{ $store.state.calendar.calendarData[0].date.hijri.month.en }}
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
             {{$store.state.calendar.calendarData[0].date.gregorian.month.en}}
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Weekday
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Fajr
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Sunrise
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Dhuhr
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Asr
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Maghrib
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Isha
            </th>
          </tr>
        </thead>

        <!-- Content -->
        <tbody>
          <tr
            class="!rounded-b-md"
            :class="{
              'border-b-[1px] border-gray-400': idx !== $store.state.calendar.calendarData.length -1,
              'bg-white text-gray-600 font-semibold': item.date.gregorian.day == new Date().getDate()
            }"
            v-for="(item, idx) in $store.state.calendar.calendarData"
          >
            <td class="p-4 text-center">{{ item.date.hijri.day }}</td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">{{ item.date.gregorian.day }}</td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.date.gregorian.weekday.en }}
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.timings.Fajr }}
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.timings.Sunrise }}
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.timings.Dhuhr }}
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.timings.Asr }}
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.timings.Maghrib }}
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              {{ item.timings.Isha }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

     <!-- For laoding -->
    <div class="overflow-x-auto !rounded-t-md mt-[3%] select-none" v-else>
      <table class="table-auto w-full !rounded-t-xl text-[#181818] animate-pulse">
        <thead class="border-b">
          <tr class="bg-[#000000] text-[#000000]">
            <th class="text-center p-4 font-medium">Loading...</th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              August
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Weekday
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Fajr
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Sunrise
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Dhuhr
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Asr
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Maghrib
            </th>
            <th
              class="text-center border-l-[1px] border-gray-400 p-4 font-medium"
            >
              Isha
            </th>
          </tr>
        </thead>

        <!-- Content -->
        <tbody>
          <tr
            class="!rounded-b-md"
            :class="item !== 10 ? 'border-b-[1px] border-gray-400' : ''"
            v-for="item in 10"
          >
            <td class="p-4 text-center">3</td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">1</td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              Monday
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              03:48 (+05)
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              05:18 (+05)
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              12:29 (+05)
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              16:25 (+05)
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              19:40 (+05)
            </td>
            <td class="p-4 text-center border-l-[1px] border-gray-400">
              21:10 (+05)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

</script>