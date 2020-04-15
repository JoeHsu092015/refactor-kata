<?php

use DDD\Kata\DetailFrame;
use PHPUnit\Framework\TestCase;

class DetailFrameTest extends TestCase
{
    public function testShow()
    {
        $d = new DetailFrame();
        $this->assertEquals(0, $d->frameWidth);
    }
}
