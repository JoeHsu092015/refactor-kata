<?php

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

    public function show(): void
    {
        echo $this->description;
    }
}
