<?php

namespace DDD\Kata;

class DetailFrame
{

    /**
     * @var string
     */
    public  $description;
    /**
     * @var string
     */
    public  $accountSymbol;
    /**
     * @var int
     */
    public  $frameLength;
    /**
     * @var int
     */
    public $frameWidth;

    function __construct()
    {
        $this->frameWidth = 0;
        $this->frameLength = 0;
    }

    public function show(): void
    {
        echo $this->description;
    }
}
