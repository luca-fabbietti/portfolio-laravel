<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CareerItem;

class CareerItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Remove existing rows (keeps auto-increment)
        CareerItem::query()->delete();

        $items = [
            [
                'company' => 'WhyNot Websites',
                'role' => 'Software Developer Freelance',
                'period' => '2024 - Present',
                'description' => 'Full stack developer and DevOps. As a full stack developer, primarily developing with Laravel and Wordpress as a framework. As a DevOps, I create and manage microservices and monolithic infrastructures.',
            ],
            [
                'company' => 'Netstrada',
                'role' => 'Software developer & DevOps',
                'period' => '2021 - 2024',
                'description' => 'Back-end software development and DevOps. As a back-end, worked with Laravel and vanilla PHP and MySQL primarily. Worked with Next.JS and React.JS as well. As a DevOps, I created microservices with Docker, GitHub actions pipelines and managed existing monolithic Debian servers.',
            ],
            [
                'company' => 'Intac',
                'role' => 'Software Developer',
                'period' => '2019 - 2021',
                'description' => 'Back-end developer and PLC developer. As a back-end, worked with Python, Django and PostgreSQL. As a PLC developer, I made experiences abroad as a PLC developer into oil & gas plants, 2 months as junior developer and 6 months as senior developer into those plants.',
            ],
            [
                'company' => 'Digimark',
                'role' => 'Software developer',
                'period' => '2018 - 2019',
                'description' => 'PLC developer. Worked with multiple projects and 1 month abroad as a junior developer.',
            ],
            [
                'company' => 'Loccioni Group',
                'role' => 'Software Developer & electrician',
                'period' => '2017 - 2018',
                'description' => 'Back-end developer for automated quality check lines. C# and SQL Server primarily. Collected data and managed for having an history for every object processed by the quality check line.',
            ],
            [
                'company' => 'Iride Progetti',
                'role' => 'Software developer',
                'period' => '06/2017 - 09/2017',
                'description' => 'Full stack developer. Worked with C# and SQL Server, HTML, CSS and JS with small projects and little customizations for bigger projects.',
            ],
        ];

        foreach ($items as $item) {
            CareerItem::create($item);
        }
    }
}
